FROM denoland/deno:latest

# Set the working directory to /app
WORKDIR /app

# Copy the rest of the application files to the working directory
COPY . .

# Compile the application
#RUN deno cache deps.ts

# Start the application
CMD ["deno", "run", "-A", "--allow-net", "app.ts"]
