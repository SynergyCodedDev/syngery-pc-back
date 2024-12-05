import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInfoModule } from './user-info/user-info.module';

@Module({
  imports: [ProductsModule, AuthModule, UsersModule, CategoriesModule, TypeOrmModule, UserInfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
