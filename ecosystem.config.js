module.exports = {
  apps: [{
    name: 'flask-app',
    script: 'app.py',
    interpreter: 'python3',
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    watch: false,
    env: {
      FLASK_APP: 'app.py',
      FLASK_ENV: 'development',
      VIRTUAL_ENV: 'securo_env'
    },
    env_production: {
      FLASK_APP: 'app.py',
      FLASK_ENV: 'production',
    }
  }]
};