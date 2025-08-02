#!/bin/bash

# Sakura VPS deployment script for San Diego LP

echo "🚀 Starting deployment for San Diego LP..."

# Project configuration
PROJECT_NAME="san-diego-lp"
PROJECT_PATH="/var/www/$PROJECT_NAME"
NODE_VERSION="18"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Installing Node.js $NODE_VERSION..."
    curl -fsSL https://deb.nodesource.com/setup_$NODE_VERSION.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 not found. Installing PM2..."
    sudo npm install -g pm2
fi

# Create project directory
sudo mkdir -p $PROJECT_PATH
sudo chown -R $USER:$USER $PROJECT_PATH

# Copy project files (adjust source path as needed)
echo "📁 Copying project files..."
cp -r * $PROJECT_PATH/

# Navigate to project directory
cd $PROJECT_PATH

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --production

# Build the project
echo "🔨 Building the project..."
npm run build

# Create logs directory
mkdir -p logs

# Copy environment variables
if [ -f ".env.example" ]; then
    echo "⚙️ Setting up environment variables..."
    cp .env.example .env
    echo "✅ Please edit .env file with your actual SMTP settings"
fi

# Stop existing PM2 process if running
pm2 stop $PROJECT_NAME 2>/dev/null || echo "No existing process to stop"

# Start the application with PM2
echo "🚀 Starting application with PM2..."
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Setup PM2 startup script
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u $USER --hp $HOME

echo "✅ Deployment completed!"
echo ""
echo "Next steps:"
echo "1. Edit $PROJECT_PATH/.env with your SMTP settings"
echo "2. Configure Nginx reverse proxy (see nginx.conf)"
echo "3. Set up SSL certificate"
echo "4. Test the application: curl http://localhost:3001"
echo ""
echo "Useful commands:"
echo "- Check status: pm2 status"
echo "- View logs: pm2 logs $PROJECT_NAME"
echo "- Restart: pm2 restart $PROJECT_NAME"