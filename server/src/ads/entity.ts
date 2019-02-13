import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString, Length, IsEmail } from 'class-validator';

@Entity()
export default class Ad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsString()
  @Length(5, 25)
  @Column('text')
  title: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('text', { nullable: true })
  pictureUrl: string;

  @Column('float')
  price: number;

  @IsEmail()
  @Column('text')
  emailAddress: string;

  @Column('text', { nullable: true })
  phoneNumber: string;
}
