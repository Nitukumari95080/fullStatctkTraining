// HTTP Methods: GET, POST, PUT, PATCH, DELETE
// 1. GET
// Purpose: Retrieve data from the server.
// Example Use Case: Fetch user details, list of products, or blog posts.
// Characteristics:
// Does not change the server's state (read-only).
// Can be cached.
// Example:
// http
// Copy code
// GET /api/users HTTP/1.1
// Host: flicpcart.com/api/users
// 2. POST
// Purpose: Submit data to the server to create a new resource.
// Example Use Case: Creating a new user, adding a new product.
// Characteristics:
// Not idempotent (sending the same data twice creates duplicate entries).
// Example:
// http
// Copy code
// POST /api/users HTTP/1.1
// Host: example.com
// Content-Type: application/json

// {
//   "name": "John Doe",
//   "email": "john@example.com"
// }
// 3. PUT
// Purpose: Update or replace an existing resource.
// Example Use Case: Updating a user's profile information completely.
// Characteristics:
// Idempotent (sending the same data multiple times has the same effect).
// Example:
// http
// Copy code
// PUT /api/users/1 HTTP/1.1
// Host: example.com
// Content-Type: application/json

// {
//   "name": "Jane Doe",
//   "email": "jane@example.com"
// }
// 4. PATCH
// Purpose: Partially update a resource.
// Example Use Case: Updating just the email address of a user.
// Characteristics:
// Idempotent (only specified changes are applied).
// Example:
// http
// Copy code
// PATCH /api/users/1 HTTP/1.1
// Host: example.com
// Content-Type: application/json

// {
//   "email": "updated@example.com"
// }
// 5. DELETE
// Purpose: Remove a resource from the server.
// Example Use Case: Deleting a user or product.
// Characteristics:
// Idempotent (deleting the same resource multiple times has the same effect).
// Example:
// http
// Copy code
// DELETE /api/users/1 HTTP/1.1
// Host: example.com
// Common HTTP Status Codes -> 3 digits ka code 
// 2xx Success
// 200 OK: Request succeeded. Example: Data retrieved with GET.
// 201 Created: A resource was successfully created. Example: POST request for a new user.
// 204 No Content: Request succeeded, but there is no response body. Example: Successful DELETE.
// 4xx Client Errors
// 400 Bad Request: The server could not understand the request. Example: Missing fields in a POST request.
// 401 Unauthorized: Authentication required. Example: Accessing a protected route without a token.
// 403 Forbidden: Client does not have permission. Example: Unauthorized user trying to delete an admin resource.
// 404 Not Found: Resource not found. Example: Invalid API endpoint.
// 405 Method Not Allowed: HTTP method not supported by the resource. Example: Sending PATCH to a resource that only allows GET.
// 5xx Server Errors
// 500 Internal Server Error: General error on the server. Example: Database connectivity issue.
// 502 Bad Gateway: Invalid response from upstream server. Example: Load balancer issues.
// 503 Service Unavailable: Server is overloaded or under maintenance. Example: During high traffic spikes.