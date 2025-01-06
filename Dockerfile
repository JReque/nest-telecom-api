FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose port and run the application
EXPOSE 3000
CMD ["npm", "run", "start:dev"]
