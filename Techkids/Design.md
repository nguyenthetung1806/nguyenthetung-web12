- Design Backend Service:
    - Node.js
    - MVC
    - RESTful api

1. Colection / Model:
    - User
        - Username
        - Password
        - Name
        - Avatar
        - Email
        - Active

    - Image:
        - ImageUrl
        - View
        - Like
        - CreatedAt
        - CreatedBy
        - Title
        - Description
        - Active
        - Comments:
            - Content
            - CreatedAt
            - CreatedBy

2. Controller:
    - CRUD:
        - Create
        - Read
        - Update
        - Delete

3. Router:
    - Router server-side không trả về HTML mà chỉ trả về dữ liệu ( JSON ).
    - RESTful:

    GET -> Read : /api/images -> Read all images.
    POST -> Create : /api/images -> Create all images.
    PUT -> Update : /api/images/:id -> Update image with id.
    DELETE -> Delete : /api/images/:id -> Delete all images.

    POST -> /api/images/:id/comments

    DELETE -> /api/images/:imageId/comments/:commentId

4. Cooked Data:
    - GET -> User:
        - Username
        - Avatar
        - Name

    - POST -> User:
        - Username
        - Password
        - Name
        - Avatar
        - Email

    - POST -> Image:
        - ImageUrl
        - CreatedBy
        - Title
        - Description
