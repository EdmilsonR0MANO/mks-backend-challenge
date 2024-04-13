import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateMovieDto } from "../dto/create-movie.dto";
import { UpdateMovieDto } from "../dto/update-movie.dto";
import { Repository } from "typeorm";
import { Movie } from "../entities/movie.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/users/entities/user.entity";

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createFilmDto: CreateMovieDto, userId: number): Promise<Movie> {
    const { title, description, releaseYear } = createFilmDto;

    const user = await this.userRepository.findOne({ where: { id: userId } });

    const movie = this.movieRepository.create({
      title,
      description,
      releaseYear,
      userId: user.id,
    });

    return this.movieRepository.save(movie);
  }

  async findAll(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  async findOne(id: string): Promise<Movie> {
    return this.movieRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    const movie = await this.movieRepository.findOne({
      where: {
        id: id,
      },
    });
  
    if (!movie) {
      return null;
    }
  
    Object.keys(updateMovieDto).forEach(key => {
      if (updateMovieDto[key] !== undefined) {
        movie[key] = updateMovieDto[key];
      }
    });
  
    return this.movieRepository.save(movie);
  }

  async remove(id: string): Promise<boolean> {
    const movie = await this.movieRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!movie) {
      return false;
    }
    await this.movieRepository.remove(movie);
    return true;
  }
}
