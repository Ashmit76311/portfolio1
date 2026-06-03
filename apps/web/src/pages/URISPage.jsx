import React from 'react';
import ProjectCaseStudyPage from './ProjectCaseStudyPage.jsx';

const URISPage = () => {
  const projectData = {
    title: 'URIS - Urban Route Intelligence System',
    description: 'AI-powered urban navigation system recommending safest and fastest routes using geospatial risk analysis',
    image: 'https://images.unsplash.com/photo-1621273974925-b5b6d7a32140',
    techStack: ['React.js', 'Node.js', 'Python', 'Mapbox GL JS', 'Random Forest', 'REST APIs', 'PostgreSQL', 'Redis'],
    githubUrl: 'https://github.com/Ashmit76311/Urban-Route-Intelligence-System',
    problemStatement: 'Traditional navigation systems optimize for distance and time but ignore critical safety factors like crime rates, accident hotspots, and environmental hazards. Urban commuters, especially in high-risk areas, need intelligent route recommendations that balance speed with safety.',
    motivation: 'After analyzing urban crime data and accident reports, I realized that existing navigation tools were missing a crucial dimension: risk assessment. URIS was built to fill this gap by combining real-time geospatial data with machine learning to provide context-aware route recommendations.',
    architecture: 'URIS follows a microservices architecture with three core layers: (1) Data Ingestion Layer - Python workers fetch and process crime data, traffic incidents, and environmental hazards from public APIs; (2) ML Processing Layer - Random Forest models trained on historical geospatial data predict risk scores for route segments; (3) API & Frontend Layer - Node.js REST API serves route recommendations to a React frontend with Mapbox GL JS for interactive visualization.',
    challenges: [
      {
        title: 'Real-time data processing at scale',
        description: 'Processing thousands of geospatial events per minute while maintaining sub-second response times for route queries.'
      },
      {
        title: 'Geospatial indexing and query optimization',
        description: 'Efficiently querying millions of location-based records to find relevant risk factors for any given route.'
      },
      {
        title: 'Model accuracy and feature engineering',
        description: 'Balancing multiple risk factors (crime, accidents, weather) into a single actionable risk score without overfitting.'
      }
    ],
    solutions: [
      'Implemented event-driven architecture with Redis pub/sub for real-time data streaming. Used worker pools to parallelize data ingestion and processing, achieving 95% reduction in latency.',
      'Leveraged PostGIS spatial extensions for PostgreSQL to enable efficient geospatial queries. Implemented R-tree indexing and bounding box optimizations to reduce query time from 2.3s to 180ms.',
      'Applied ensemble methods combining Random Forest with gradient boosting. Used cross-validation and feature importance analysis to identify the top 12 predictive features, improving model accuracy to 87.4%.'
    ],
    scalability: 'URIS is designed for horizontal scaling. The data ingestion layer uses containerized Python workers that can be scaled independently based on event volume. The Node.js API layer runs behind a load balancer with auto-scaling groups. Redis cluster handles session management and caching. Database read replicas distribute query load. Current architecture supports 10,000+ concurrent users with average response time under 300ms.',
    security: 'All API endpoints require JWT authentication with role-based access control. User location data is encrypted at rest using AES-256 and in transit via TLS 1.3. Personally identifiable information is anonymized before being used for model training. Rate limiting prevents abuse (100 requests/minute per user). SQL injection and XSS attacks are mitigated through parameterized queries and input sanitization.',
    performance: 'Implemented multi-level caching strategy: (1) Browser cache for static map tiles; (2) Redis cache for frequently requested routes (cache hit rate: 73%); (3) Database query result caching. Optimized frontend bundle size from 2.1MB to 487KB through code splitting and lazy loading. Used Web Workers for heavy geospatial calculations to keep UI responsive. Achieved Lighthouse performance score of 94/100.',
    lessonsLearned: [
      'Geospatial data requires specialized indexing strategies - generic database indexes are insufficient for location-based queries at scale',
      'Real-time ML predictions need careful feature engineering - complex models with 50+ features performed worse than simpler models with 12 well-chosen features',
      'User trust is critical for safety-focused applications - transparent risk scoring and clear explanations improved user adoption by 34%',
      'Event-driven architecture is essential for real-time data pipelines - polling-based approaches created unacceptable latency',
      'Caching strategies must be route-specific - generic caching led to stale risk data during high-activity periods'
    ],
    futureImprovements: [
      'Integrate real-time traffic data from IoT sensors and crowd-sourced reports',
      'Add multi-modal routing (walking, cycling, public transit) with mode-specific risk models',
      'Implement federated learning to train models on user data without compromising privacy',
      'Build mobile apps (iOS/Android) with offline route caching for areas with poor connectivity',
      'Add community reporting features for users to flag new hazards in real-time',
      'Expand to additional cities and train region-specific ML models'
    ]
  };

  return <ProjectCaseStudyPage {...projectData} />;
};

export default URISPage;