# Chunab Backend - Election Management System

A comprehensive backend system for managing elections with a super-admin license key system.

## Features

### 🔐 Authentication & Authorization
- **Super Admin**: Full system access, can create license keys
- **Admin**: Limited access based on license key permissions
- **License Key System**: Secure registration with customizable permissions

### 🏛️ Party Management
- Create, read, update, delete political parties
- Party symbols, colors, and metadata
- Search and filter functionality

### 👥 Candidate Management
- Comprehensive candidate profiles
- Constituency and position management
- Document management
- Approval workflow

### 📊 Analytics & Reporting
- Dashboard statistics
- Vote tracking
- Performance metrics

## API Endpoints

### Authentication
- `POST /api/admin/register` - Register admin with license key
- `POST /api/admin/login` - Admin login
- `GET /api/admin/profile` - Get admin profile
- `GET /api/admin/permissions` - Get admin permissions

### Super Admin
- `POST /api/super-admin/license-keys` - Create license key
- `GET /api/super-admin/license-keys` - Get all license keys
- `GET /api/super-admin/license-keys/:id` - Get specific license key
- `PUT /api/super-admin/license-keys/:id` - Update license key
- `DELETE /api/super-admin/license-keys/:id` - Delete license key
- `GET /api/super-admin/admins` - Get all admins
- `PUT /api/super-admin/admins/:id/deactivate` - Deactivate admin
- `GET /api/super-admin/dashboard/stats` - Get dashboard statistics

### Parties
- `POST /api/parties` - Create party
- `GET /api/parties` - Get all parties
- `GET /api/parties/:id` - Get specific party
- `PUT /api/parties/:id` - Update party
- `DELETE /api/parties/:id` - Delete party
- `PATCH /api/parties/:id/toggle-status` - Toggle party status

### Candidates
- `POST /api/candidates` - Create candidate
- `GET /api/candidates` - Get all candidates
- `GET /api/candidates/:id` - Get specific candidate
- `PUT /api/candidates/:id` - Update candidate
- `DELETE /api/candidates/:id` - Delete candidate
- `PATCH /api/candidates/:id/toggle-status` - Toggle candidate status
- `PATCH /api/candidates/:id/approval` - Approve/reject candidate
- `GET /api/candidates/constituency/:constituency` - Get candidates by constituency

## Setup Instructions

### 1. Environment Variables
Create a `.env` file in the backend directory:

```env
MONGO_URL=mongodb://localhost:27017/chunab
JWT_SECRET=your_jwt_secret_key
PORT=5000
FRONTEND_URL=http://localhost:3000
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Seed Super Admin
```bash
npm run seed:superadmin
```

This will create a super admin with:
- Email: `superadmin@chunab.com`
- Password: `SuperAdmin@123`

**⚠️ Change the password after first login!**

### 4. Start Development Server
```bash
npm run dev
```

## License Key System

### Creating License Keys
Super admins can create license keys with customizable permissions:

```json
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

### Admin Registration
Admins register using license keys:

```json
{
  "name": "Admin Name",
  "email": "admin@example.com",
  "password": "secure_password",
  "licenseKey": "XXXX-XXXX-XXXX-XXXX"
}
```

## Permission System

### Super Admin Permissions
- All permissions granted automatically
- Can create and manage license keys
- Can manage all admins
- Full system access

### Admin Permissions (Based on License Key)
- `canManageCandidates`: Create, update, delete candidates
- `canManageParties`: Create, update, delete parties
- `canViewAnalytics`: Access dashboard and reports
- `canManageUsers`: Manage user accounts

## Database Models

### Admin
- Basic admin information
- Role-based access (super_admin, admin)
- License key association
- Activity tracking

### LicenseKey
- Unique key generation
- Expiration management
- Permission configuration
- Usage tracking

### Party
- Political party information
- Symbols and branding
- Metadata and statistics

### Candidate
- Comprehensive candidate profiles
- Constituency and position data
- Document management
- Election results tracking

## Security Features

- JWT-based authentication
- Password hashing with bcrypt
- License key validation
- Permission-based authorization
- Input validation and sanitization

## Error Handling

All endpoints return consistent error responses:

```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error information"
}
```

## Development

### Project Structure
```
backend/
├── config/
│   └── db.js
├── controllers/
│   ├── adminController.js
│   ├── superAdminController.js
│   ├── partyController.js
│   └── candidateController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── adminModel.js
│   ├── licenseKeyModel.js
│   ├── partyModel.js
│   └── candidateModel.js
├── routes/
│   ├── adminRoutes.js
│   ├── superAdminRoutes.js
│   ├── partyRoutes.js
│   └── candidateRoutes.js
├── scripts/
│   └── seedSuperAdmin.js
└── index.js
```

### Adding New Features
1. Create/update models in `models/`
2. Add controllers in `controllers/`
3. Define routes in `routes/`
4. Update middleware if needed
5. Test endpoints thoroughly

## License

This project is licensed under the ISC License.
