import Fastify from 'fastify';
import { certificateRoutes } from './routes/certificates.routes';
import { userRoutes } from './routes/user.routes';

const app = Fastify();

app.register(userRoutes, {
  prefix: '/users',
});

app.register(certificateRoutes, {
  prefix: '/certificates',
});

app.listen({ port: 3100 }, () => {
  console.log('Server listening on port 3100');
});
