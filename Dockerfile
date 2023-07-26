# Use the official Node.js 14 base image
FROM node:18.14.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the specified port on the container
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]