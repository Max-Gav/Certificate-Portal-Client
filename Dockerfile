# Use the official Nginx image as the base image
FROM nginx:alpine

# Copy the built application files to the Nginx web directory
COPY ./build /usr/share/nginx/html

# Copy custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]