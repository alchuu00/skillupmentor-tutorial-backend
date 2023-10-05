import { SetMetadata } from '@nestjs/common'

export const HasPermissions = (access: string) => SetMetadata('access', access)
