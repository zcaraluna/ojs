module.exports = {
  apps: [{
    name: 'ojs-nextjs',
    script: 'npm',
    args: 'start',
    cwd: '/home/bitcanc/web/ojs.s1mple.cloud/public_html',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 6369
    }
  }]
}

