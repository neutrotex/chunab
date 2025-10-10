# API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
All protected routes require a Bearer token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

## 1. Admin Registration & Login

### Register Admin
```http
POST /admin/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "licenseKey": "XXXX-XXXX-XXXX-XXXX"
}
```

### Login Admin
```http
POST /admin/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Get Admin Profile
```http
GET /admin/profile
Authorization: Bearer <token>
```

### Get Admin Permissions
```http
GET /admin/permissions
Authorization: Bearer <token>
```

## 2. Super Admin Operations

### Create License Key
```http
POST /super-admin/license-keys
Authorization: Bearer <super_admin_token>
Content-Type: application/json

{
  "expiresInDays": 30,
  "permissions": {
    "canManageCandidates": true,
    "canManageParties": true,
    "canViewAnalytics": false,
    "canManageUsers": false
  }
}
```

### Get All License Keys
```http
GET /super-admin/license-keys?page=1&limit=10&status=active
Authorization: Bearer <super_admin_token>
```

### Get Dashboard Stats
```http
GET /super-admin/dashboard/stats
Authorization: Bearer <super_admin_token>
```

## 3. Party Management

### Create Party
```http
POST /parties
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Nepal Communist Party",
  "symbolURL": "https://example.com/party-symbol.png",
  "shortName": "NCP",
  "symbol": "Hammer and Sickle",
  "color": "#FF0000",
  "description": "Political party description",
  "foundedYear": 2018,
  "leader": {
    "name": "K.P. Sharma Oli",
    "position": "Chairman"
  },
  "headquarters": "Kathmandu",
  "ideology": "Communism"
}
```

### Get Parties List (Public)
```http
GET /parties/list
```

### Get All Parties
```http
GET /parties?page=1&limit=10&search=nepal&isActive=true
Authorization: Bearer <token>
```

### Update Party
```http
PUT /parties/:partyId
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Updated Party Name",
  "color": "#00FF00"
}
```

## 4. Candidate Management

### Create Candidate
```http
POST /candidates
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Ram Shrestha",
  "gender": "Male",
  "photoURL": "https://example.com/photo.jpg",
  "party": "64a1b2c3d4e5f6789012345",
  "education": "Masters in Political Science",
  "assetsWorth": 5000000,
  "publicScoreRating": 8.5,
  "constituency": "Kathmandu-1",
  "pastExperience": "Former Minister of Education",
  "agendas": [
    "Education reform",
    "Healthcare improvement",
    "Infrastructure development"
  ],
  "criminalRecords": [],
  "contactInfo": {
    "phone": "+977-9841234567",
    "email": "ram@example.com",
    "address": "Kathmandu, Nepal"
  },
  "position": "MP",
  "electionType": "Federal",
  "age": 45,
  "profession": "Politician"
}
```

### Get Constituencies (Public)
```http
GET /constituencies
```

### Get All Candidates
```http
GET /candidates?page=1&limit=10&party=64a1b2c3d4e5f6789012345&constituency=kathmandu
Authorization: Bearer <token>
```

### Get Candidates by Constituency (Public)
```http
GET /candidates/constituency/Kathmandu-1?position=MP&electionType=Federal
```

### Approve/Reject Candidate
```http
PATCH /candidates/:candidateId/approval
Authorization: Bearer <token>
Content-Type: application/json

{
  "isApproved": true
}
```

## 5. Constituency Routes

### Get All Constituencies
```http
GET /constituencies
```
**Response**: List of all constituencies with province and district info

### Get All Provinces
```http
GET /constituencies/provinces
```
**Response**: List of all provinces with districts and constituencies

### Get Districts by Province
```http
GET /constituencies/provinces/:provinceId/districts
```
**Parameters**: `provinceId` (e.g., "province-1")
**Response**: List of districts in the specified province

### Get Constituencies by District
```http
GET /constituencies/provinces/:provinceId/districts/:districtId/constituencies
```
**Parameters**: `provinceId`, `districtId`
**Response**: List of constituencies in the specified district

### Get Booth Locations by Constituency
```http
GET /constituencies/constituencies/:constituencyId/booth-locations
```
**Parameters**: `constituencyId`
**Response**: List of booth locations (currently empty, to be added later)

## 6. Response Format

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {
    // Response data
  }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error information"
}
```

## 7. Pagination

Most list endpoints support pagination:
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)

Response includes pagination info:
```json
{
  "success": true,
  "data": {
    "items": [...],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalItems": 50,
      "itemsPerPage": 10
    }
  }
}
```

## 8. Search & Filtering

### Parties
- `search`: Search in name, shortName, description
- `isActive`: Filter by active status

### Candidates
- `search`: Search in name, email, constituency
- `party`: Filter by party ID
- `constituency`: Filter by constituency
- `position`: Filter by position (MP, MLA, etc.)
- `electionType`: Filter by election type
- `isActive`: Filter by active status
- `isApproved`: Filter by approval status

## 8. Testing with cURL

### Register Admin
```bash
curl -X POST http://localhost:5000/api/admin/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Admin",
    "email": "test@example.com",
    "password": "password123",
    "licenseKey": "YOUR_LICENSE_KEY"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/admin/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

### Create Party
```bash
curl -X POST http://localhost:5000/api/parties \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "name": "Test Party",
    "shortName": "TP",
    "symbol": "Test Symbol",
    "color": "#0000FF"
  }'
```
