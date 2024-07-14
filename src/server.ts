import Fastify from 'fastify';
import { certificateRoutes } from './routes/certificates.routes';
import { userRoutes } from './routes/user.routes';

const app = Fastify();

// Registro das rotas de usuário
app.register(userRoutes, {
  prefix: '/users',
});

// Registro das rotas de certificado
app.register(certificateRoutes, {
  prefix: '/certificates',
});

// Inicialização do servidor
app.listen({ port: 3100 }, () => {
  console.log('Server listening on port 3100');
});
