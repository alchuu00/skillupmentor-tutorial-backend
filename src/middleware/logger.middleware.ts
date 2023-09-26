import { Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'
import Logging from 'library/logging'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Logging the request details
    Logging.info(
      `Incoming -> Method [${req.method}] - Url: [${req.originalUrl}] - Host: [${req.hostname}] - IP: [${req.socket.remoteAddress}]`,
    )
    if (next) {
      next()
    }
  }
}