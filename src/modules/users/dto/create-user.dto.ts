import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MaxLength,
} from 'class-validator';

export class CreateUserDTO {
  @ApiProperty({
    description: 'Nome de usuário do Usuário',
    example: 'xXx_epicusername_xXx',
  })
  @IsString()
  @IsNotEmpty()
  username!: string;

  @ApiProperty({
    description: 'Email do Usuário',
    example: 'example@email.com',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({ description: 'Senha do Usuário', example: 'Forte12!@' })
  @IsStrongPassword(
    { minSymbols: 2, minNumbers: 2 },
    {
      message:
        'A senha deve ter no mínimo 8 caracteres e no máximo 50 caracteres, contendo pelo menos 1 letra minúscula, 1 letra maiúscula, 2 números e 2 símbolos.',
    },
  )
  password!: string;

  @ApiProperty({
    description: 'Nome do Usuário',
    example: 'Jane Doe',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  name!: string;
}
