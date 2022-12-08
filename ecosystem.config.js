module.exports = {
  apps: [
    {
      name: 'nextServer',
      script: 'yarn start',
      exec_mode: 'cluster',
      instances: 2,
      //   autorestart: true,
      //   listen_timeout: 50000,
      //   kill_timeout: 5000,
    },
  ],
};
