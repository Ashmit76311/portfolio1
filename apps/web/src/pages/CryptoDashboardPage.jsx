import React from 'react';
import ProjectCaseStudyPage from './ProjectCaseStudyPage.jsx';

const CryptoDashboardPage = () => {
  const projectData = {
    title: 'Crypto Market Analytics Dashboard',
    description: 'Real-time cryptocurrency market analytics dashboard with automated Excel reporting',
    image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b',
    techStack: ['Python', 'Pandas', 'Apache Superset', 'CoinGecko API', 'MySQL', 'OpenPyXL', 'Celery', 'Redis'],
    githubUrl: 'https://github.com/Ashmit76311/Crypto-Market-Analytics-Dashboard',
    problemStatement: 'Cryptocurrency traders and analysts need real-time market insights and automated reporting to make informed decisions. Manual data collection from multiple exchanges is time-consuming and error-prone. Existing solutions lack customizable reporting and fail to integrate with traditional business tools like Excel.',
    motivation: 'While working with a crypto trading team, I observed analysts spending 3-4 hours daily collecting data from different sources and manually creating Excel reports. This project was built to automate the entire pipeline - from data ingestion to report generation - freeing analysts to focus on strategy rather than data wrangling.',
    architecture: 'The system follows a data pipeline architecture: (1) Data Collection Layer - Python scripts with async requests fetch real-time price, volume, and market cap data from CoinGecko API every 60 seconds; (2) Storage Layer - MySQL database stores historical data with time-series optimizations; (3) Processing Layer - Pandas performs data transformations, aggregations, and statistical analysis; (4) Visualization Layer - Apache Superset provides interactive dashboards with custom charts; (5) Reporting Layer - Celery workers generate automated Excel reports with OpenPyXL on scheduled intervals.',
    challenges: [
      {
        title: 'Real-time data ingestion from rate-limited APIs',
        description: 'CoinGecko API has strict rate limits (50 calls/minute). Fetching data for 100+ cryptocurrencies while staying within limits was challenging.'
      },
      {
        title: 'Automated Excel report generation with complex formatting',
        description: 'Reports needed to include charts, conditional formatting, pivot tables, and custom styling - all generated programmatically.'
      },
      {
        title: 'Data accuracy and handling API failures',
        description: 'Cryptocurrency prices are volatile. Missing or delayed data could lead to incorrect analysis and trading decisions.'
      }
    ],
    solutions: [
      'Implemented async data pipelines using Python asyncio and aiohttp to maximize throughput within rate limits. Used request batching to fetch multiple coins per API call. Added intelligent retry logic with exponential backoff for failed requests.',
      'Built a templating system with OpenPyXL that separates data from presentation. Created reusable chart generators and formatting functions. Implemented dynamic pivot table creation based on user-defined dimensions and metrics.',
      'Added data validation layer that checks for anomalies (price spikes >20%, missing timestamps). Implemented fallback data sources (Binance API as backup). Used Redis to cache last known good values and flag suspicious data points for manual review.'
    ],
    scalability: 'The data pipeline is designed to scale horizontally. Celery workers can be added to handle increased report generation load. MySQL is configured with read replicas for dashboard queries, keeping write operations isolated. Redis cluster handles caching and task queue distribution. Current setup processes 150+ cryptocurrencies with 1-minute granularity and generates 50+ custom reports daily without performance degradation.',
    security: 'API keys are stored in environment variables and rotated monthly. Database credentials use least-privilege access (read-only for Superset, write-only for data ingestion). Excel reports are encrypted before email delivery. User authentication for Superset dashboards uses OAuth 2.0 with role-based access control. All external API calls use HTTPS with certificate pinning.',
    performance: 'Optimized database queries using time-series partitioning (monthly partitions) and composite indexes on (coin_id, timestamp). Reduced average query time from 4.2s to 320ms. Implemented connection pooling to handle concurrent dashboard users. Used Pandas vectorized operations instead of row-by-row processing, improving data transformation speed by 12x. Excel report generation time reduced from 45s to 8s through parallel processing and template caching.',
    lessonsLearned: [
      'Async programming is essential for I/O-bound tasks - switching from synchronous to async requests improved throughput by 8x',
      'Data validation must happen at ingestion time - catching bad data early prevents cascading errors in reports',
      'Excel automation requires deep understanding of the library - OpenPyXL has many undocumented quirks that required trial and error',
      'Caching strategies must account for data freshness - aggressive caching led to stale dashboard data during volatile market periods',
      'Monitoring and alerting are critical for data pipelines - silent failures in scheduled jobs went unnoticed for hours before implementing proper logging'
    ],
    futureImprovements: [
      'Add machine learning models for price prediction and anomaly detection',
      'Integrate sentiment analysis from Twitter and Reddit to correlate social signals with price movements',
      'Build real-time alerting system for price thresholds and portfolio changes',
      'Add support for DeFi protocols and NFT market data',
      'Implement custom technical indicators (RSI, MACD, Bollinger Bands) in dashboards',
      'Create mobile app for on-the-go report access and push notifications'
    ]
  };

  return <ProjectCaseStudyPage {...projectData} />;
};

export default CryptoDashboardPage;

// Updated to ensure dev server reloads this module