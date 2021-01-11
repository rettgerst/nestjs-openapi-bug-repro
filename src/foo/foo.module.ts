import { Module } from '@nestjs/common';

import { FooController } from './foo.controller';
import { FooService } from './foo.service';

@Module({
	providers: [FooService],
	controllers: [FooController]
})
export class FooModule {}
