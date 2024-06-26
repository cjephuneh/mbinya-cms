const path = require('path');


module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'aws-0-us-west-1.pooler.supabase.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres.fikzepuxyguxnddkakam'),
      password: env('DATABASE_PASSWORD', 'Gethsemane0#'),
      ssl: env.bool('DATABASE_SSL', false) 
    },
    useNullAsDefault: true,
  }
});
