# CyberSafe - Plataforma Educativa de Ciberseguridad

CyberSafe es una plataforma educativa integral desarrollada con Angular, diseñada para el aprendizaje y entrenamiento en ciberseguridad. Ofrece cursos que van desde defensa básica contra phishing hasta pruebas de penetración avanzadas y prácticas de seguridad empresarial.

## 🎯 Objetivos Principales

- **Plataforma educativa completa** con más de 899 cursos disponibles
- **Comunidad activa** con más de 25,000 estudiantes
- **Instructores especializados** con 158 profesionales certificados
- **Categorías especializadas** que cubren todos los aspectos de la ciberseguridad
- **Interfaz moderna** construida con Angular y componentes standalone
- **Navegación intuitiva** con sistema de routing optimizado

## 🏗️ Arquitectura del Proyecto

### Estructura de Componentes

La aplicación sigue una arquitectura basada en componentes con separación clara de responsabilidades:

| Componente | Propósito | Ruta | Características Clave |
|---|---|---|---|
| `AppComponent` | Shell de la aplicación | - | Contenedor raíz, configuración de routing |
| `MenuInicioComponent` | Página de inicio | `/inicio` | Hero, categorías, contenido destacado |
| `CoursesListComponent` | Catálogo de cursos | `/courses/list` | Navegación de cursos, filtros |
| `CourseViewComponent` | Detalles del curso | `/courses/view` | Información individual del curso |
| `MenuHeaderComponent` | Navegación | - | Header de navegación global |

### Sistema de Routing

```typescript
const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: MenuInicioComponent },
  { path: 'courses/list', component: CoursesListComponent },
  { path: 'courses/view', component: CourseViewComponent }
];
```

## 📚 Categorías de Cursos

CyberSafe organiza la educación en ciberseguridad en 10 dominios especializados:

1. **Hacking Ético y Pentesting** (38 cursos) - Profesionales técnicos
2. **Seguridad en Redes y Sistemas** (38 cursos) - Administradores de red
3. **Criptografía Avanzada** (38 cursos) - Especialistas en seguridad
4. **Seguridad en Desarrollo** (38 cursos) - Desarrolladores de software
5. **Forensia Digital** (38 cursos) - Analistas de seguridad
6. **Defensa contra Phishing y Scams** (38 cursos) - Usuarios generales
7. **Protección de Datos Personales** (38 cursos) - Usuarios generales
8. **Seguridad en Dispositivos Móviles** (38 cursos) - Usuarios generales
9. **Seguridad para Empresas Pequeñas** (38 cursos) - Propietarios de negocios
10. **Navegación Segura en Redes Sociales** (38 cursos) - Usuarios generales

## 🛠️ Requisitos del Sistema

### Prerequisitos

- **Node.js**: versión 16.x o superior
- **npm**: versión 8.x o superior
- **Angular CLI**: versión 15.x o superior

### Dependencias Principales

```json
{
  "@angular/animations": "^15.0.0",
  "@angular/common": "^15.0.0",
  "@angular/compiler": "^15.0.0",
  "@angular/core": "^15.0.0",
  "@angular/forms": "^15.0.0",
  "@angular/platform-browser": "^15.0.0",
  "@angular/platform-browser-dynamic": "^15.0.0",
  "@angular/router": "^15.0.0",
  "rxjs": "~7.5.0",
  "tslib": "^2.3.0",
  "zone.js": "~0.12.0"
}
```

## 🚀 Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone https://github.com/JoshuaPZz/CyberSafe-ProyectoTI.git
cd CyberSafe-ProyectoTI
```

### 2. Instalar Dependencias

```bash
# Navegar al directorio del frontend
cd Front-demoCyberSafe

# Instalar dependencias de Node.js
npm install
```

### 3. Verificar Instalación de Angular CLI

```bash
# Verificar versión de Angular CLI
ng version

# Si no está instalado, instalar globalmente
npm install -g @angular/cli@latest
```

## 🔧 Configuración del Entorno de Desarrollo

### Variables de Entorno

Crear un archivo `environment.ts` en `src/environments/`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  version: '1.0.0'
};
```

### Configuración del Servidor de Desarrollo

```bash
# Iniciar servidor de desarrollo
ng serve

# Iniciar con configuraciones específicas
ng serve --host 0.0.0.0 --port 4200 --open
```

## 📱 Comandos Disponibles

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm start
# o
ng serve

# Compilar en modo desarrollo
ng build

# Ejecutar tests unitarios
ng test

# Ejecutar tests e2e
ng e2e

# Análisis de código
ng lint
```

### Producción

```bash
# Compilar para producción
ng build --configuration production

# Servir build de producción localmente
npx http-server dist/cybersafe -p 8080
```

## 🏃‍♂️ Guía de Inicio Rápido

1. **Instalar dependencias**:
   ```bash
   cd Front-demoCyberSafe && npm install
   ```

2. **Iniciar el servidor de desarrollo**:
   ```bash
   ng serve
   ```

3. **Abrir el navegador**:
   ```
   http://localhost:4200
   ```

4. **Explorar la aplicación**:
   - Página de inicio: Información general y categorías
   - Lista de cursos: Catálogo completo con filtros
   - Detalles del curso: Información específica de cada curso

## 📂 Estructura del Proyecto

```
Front-demoCyberSafe/
├── src/
│   ├── app/
│   │   ├── menu/
│   │   │   ├── menu-inicio/          # Componente página principal
│   │   │   └── menu-header/          # Componente header navegación
│   │   ├── courses/
│   │   │   ├── courses-list/         # Lista de cursos
│   │   │   └── course-view/          # Vista detalle curso
│   │   ├── app.component.ts          # Componente raíz
│   │   ├── app.routes.ts             # Configuración routing
│   │   └── app.config.ts             # Configuración aplicación
│   ├── assets/                       # Recursos estáticos
│   ├── environments/                 # Configuración entornos
│   └── styles.css                    # Estilos globales
├── angular.json                      # Configuración Angular
├── package.json                      # Dependencias y scripts
└── README.md                         # Documentación
```

## 🎨 Tecnologías Utilizadas

- **Frontend**: Angular 15+
- **Arquitectura**: Standalone Components
- **Routing**: Angular Router
- **Estilos**: CSS3 + Bootstrap/Material (según implementación)
- **TypeScript**: Para tipado estático
- **RxJS**: Para programación reactiva

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 🙏 Agradecimientos

- Comunidad Angular por las herramientas y documentación
- Instructores y estudiantes que forman parte de la plataforma CyberSafe
- Contribuidores del proyecto open source

---

**CyberSafe** - Educación en ciberseguridad para todos los niveles 🛡️
