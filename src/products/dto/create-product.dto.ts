import { IsString, IsNumber, IsOptional, IsArray, IsBoolean, IsDateString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  categoryId: string;

  @IsString()
  desc: string;

  @IsOptional()
  @IsString()
  subDesc?: string;

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsNumber()
  price: number;

  @IsString()
  imageUrl: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  properties?: string[];

  @IsString()
  brand: string;

  @IsBoolean()
  warranty: boolean;

  @IsOptional()
  @IsDateString()
  releaseDate?: Date;
}
