import { Exclude } from 'class-transformer'
import { Column, Entity } from 'typeorm'

import { Base } from './base.entity'

@Entity()
export class User extends Base {
  @Column({ unique: true })
  email: string
  @Column({ nullable: true })
  first_name: string
  @Column({ nullable: true })
  last_name: string
  avatar: string
  @Column({ nullable: true })
  @Exclude()
  password: string
  @Column({ nullable: true, default: null })
  @Exclude()
  refresh_token: string

  // role: Role | null
}
