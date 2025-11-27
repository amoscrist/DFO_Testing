# ⚡ Pipeline Builder - Quick Reference Card

## 🚀 Super Quick Start (3 commands)

```bash
# 1. Extract
unzip abd-pipeline-builder.zip && cd abd-pipeline-builder

# 2. Copy files (see INTEGRATION_GUIDE.md for details)
./quick-install.sh  # Or follow manual steps

# 3. Done! Visit http://localhost:3000/pipeline-builder
```

---

## 📂 File Locations (Copy These)

### Frontend
```bash
# Main page
abd-pipeline-builder/frontend-app-pipeline-builder-page.tsx
  → YOUR_PROJECT/frontend/app/pipeline-builder/page.tsx

# Components
abd-pipeline-builder/FormBuilder.tsx
  → YOUR_PROJECT/frontend/components/pipeline/FormBuilder.tsx

abd-pipeline-builder/FormBuilder/
  → YOUR_PROJECT/frontend/components/pipeline/FormBuilder/

abd-pipeline-builder/VisualBuilder.tsx
  → YOUR_PROJECT/frontend/components/pipeline/VisualBuilder.tsx

abd-pipeline-builder/VisualBuilder/
  → YOUR_PROJECT/frontend/components/pipeline/VisualBuilder/
```

### Backend
```bash
abd-pipeline-builder/backend/pipeline_routes.py
  → YOUR_PROJECT/backend/pipeline_routes.py

abd-pipeline-builder/backend/pipeline_executor.py
  → YOUR_PROJECT/backend/pipeline_executor.py
```

---

## 🔧 Files to Modify

### 1. backend/main.py
```python
from pipeline_routes import router as pipeline_router
app.include_router(pipeline_router)
```

### 2. frontend/package.json
```bash
npm install reactflow
```

### 3. .env
```bash
K8S_NAMESPACE=abd-pipelines
K8S_IN_CLUSTER=false
SIMULATE_PIPELINE=true
```

---

## 📡 API Endpoints (Quick Reference)

```bash
# Create
POST   /pipelines

# Read
GET    /pipelines
GET    /pipelines/{id}

# Update
PUT    /pipelines/{id}

# Delete
DELETE /pipelines/{id}

# Execute
POST   /pipelines/{id}/execute
GET    /pipelines/{id}/runs
GET    /pipelines/{id}/runs/{run_id}
GET    /pipelines/{id}/runs/{run_id}/logs
```

---

## 🎯 Common Tasks

### Create Pipeline (cURL)
```bash
curl -X POST http://localhost:8000/pipelines \
  -H "Content-Type: application/json" \
  -d '{
    "name": "My Pipeline",
    "repository": "github.com/user/repo",
    "trigger": {"type": "push", "branch": "main"},
    "stages": [
      {
        "id": "build-1",
        "type": "build",
        "name": "Build",
        "commands": ["npm install", "npm run build"]
      }
    ]
  }'
```

### Execute Pipeline
```bash
curl -X POST http://localhost:8000/pipelines/PIPELINE_ID/execute
```

### Get Logs
```bash
curl http://localhost:8000/pipelines/PIPELINE_ID/runs/RUN_ID/logs
```

---

## 🔍 Troubleshooting (Quick Fixes)

### "Module not found: pipeline_routes"
```bash
ls backend/pipeline_routes.py  # If missing, copy again
```

### "Module 'reactflow' not found"
```bash
cd frontend && npm install reactflow
```

### "Page shows 404"
```bash
ls frontend/app/pipeline-builder/page.tsx  # If missing, copy again
```

### "K8s connection error"
```
This is normal! System uses simulation mode automatically.
```

---

## 📚 Documentation Quick Links

- **Quick Start:** `README.md`
- **Step-by-Step:** `INTEGRATION_GUIDE.md`
- **All Files:** `FILES_CREATED.md`
- **Setup Details:** `PIPELINE_SETUP.md`
- **API Docs:** `API_REFERENCE.md`
- **Features:** `CHANGELOG.md`

---

## 💡 Pro Tips

1. **Start with Form Builder** - Easier for first pipeline
2. **Use Simulation Mode** - No K8s needed for dev
3. **Switch Modes Anytime** - Form ↔ Visual seamlessly
4. **Check Logs** - Real-time feedback shows everything
5. **Use Templates** - Pre-built workflows save time

---

## ⏱️ Time Estimates

- **Read README:** 5 minutes
- **Integration:** 10 minutes
- **First Pipeline:** 2 minutes
- **Total:** ~17 minutes to production

---

## ✅ Verification Checklist

```bash
# Backend running?
curl http://localhost:8000/pipelines

# Frontend accessible?
curl http://localhost:3000/pipeline-builder

# Form builder works?
# Visit: http://localhost:3000/pipeline-builder
# Click "Form Builder" → Should open wizard

# Visual builder works?
# Click "Visual Builder" → Should show canvas
```

---

## 🎯 Success = These Work

- [ ] `/pipeline-builder` page loads
- [ ] Form builder wizard works
- [ ] Visual builder drag-drop works
- [ ] Can create pipeline
- [ ] Can execute pipeline
- [ ] Logs stream in real-time
- [ ] No console errors

---

## 🆘 Emergency Commands

### Reset Everything
```bash
# Remove files
rm -rf frontend/app/pipeline-builder
rm -rf frontend/components/pipeline
rm backend/pipeline_*.py

# Re-extract and start over
unzip abd-pipeline-builder.zip
```

### Check What's Running
```bash
# Backend
lsof -i :8000

# Frontend
lsof -i :3000
```

### Restart Services
```bash
# Backend
cd backend && uvicorn main:app --reload

# Frontend
cd frontend && npm run dev
```

---

## 📊 Package Info

- **Size:** 35 KB
- **Files:** 21 files
- **Lines:** ~3,100 lines
- **Integration:** 10 minutes
- **Difficulty:** Easy 🟢

---

## 🎉 Quick Win

```bash
# 1. Extract & copy files (10 min)
# 2. Visit /pipeline-builder
# 3. Click "Form Builder"
# 4. Create pipeline (2 min)
# 5. Click "Save & Run"
# 6. Watch it execute! 🚀
```

---

## 🔗 Stage Types

- 🔨 **Build** - Compile, package
- 🧪 **Test** - Unit, integration
- 👁️ **Review** - AI code review
- 🛡️ **Security** - Vulnerability scan
- 🚀 **Deploy** - AWS, K8s, Docker

---

## 🔔 Trigger Types

- 📍 **Push** - On git push
- 📍 **PR** - On pull request
- 📍 **Schedule** - Cron job
- 📍 **Manual** - Click button
- 📍 **Webhook** - HTTP trigger

---

## 💾 Need Full Docs?

All documentation is in the ZIP:
- `README.md` - Overview
- `INTEGRATION_GUIDE.md` - Detailed steps
- `API_REFERENCE.md` - Full API
- `PIPELINE_SETUP.md` - Configuration
- `FILES_CREATED.md` - File inventory

---

**⚡ This is your cheat sheet. Keep it handy!**

**[Download Package](computer:///mnt/user-data/outputs/abd-pipeline-builder.zip)**
