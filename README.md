# Визитка

Визитка **Порохина Владислава Андреевича**.

```bash
docker compose up --build
```

Запуск: http://localhost:3000/graphql - Apollo Sandbox.

Пример запроса:
```
query GetPortfolio {
  profile {
    name
    githubUrl
    skills {
      name
    }
    experience {
      company
      position
      startDate
      endDate
      achievements
    }
    projects {
      name
      description
      url
    }
  }
}
```


## Архитектура и принятые решения
- Разделил код на Resolver, Service и Repository. Каждый слой отвечает за свою задачу.
- Для хранения данных использовал PostgreSQL, для работы с ними - Prisma. Данные находятся в отдельных связанных таблица
- Автоматическая подгрузка данных из связанных таблиц. При расширении можно оптимизировать работу.
- seed используется для создания таблиц
- Пока только данные на получения данных, без их изменения