import { Controller, OnApplicationBootstrap } from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('foo')
@Controller('/api/foo')
export class FooController implements OnApplicationBootstrap {
	onApplicationBootstrap() {}
}
