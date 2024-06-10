# Stage 1: Build Angular app
FROM node:18-alpine as builder
# Automatically create the directory if it doesn't exist.
WORKDIR /app
# Copy the rest of the application code
COPY . .
# Install dependencies
RUN npm install
# Build the Angular app
RUN npm run build

# Stage 2: Serve Angular app using NGINX
FROM nginx:1.20 as ngx
# Copy built Angular app from Stage 1
COPY --from=builder /app/dist/ria2024/browser /usr/share/nginx/html
COPY /nginx.conf.template  /etc/nginx/conf.d/default.conf
# Create NGINX cache directory
RUN mkdir -p /var/cache/nginx/client_temp
# Set ownership of NGINX cache directory
RUN chown -R nginx:nginx /var/cache/nginx

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]