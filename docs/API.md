# API Documentation

## Backtest

POST /api/backtest

Run historical simulations.

### Request

{
  "strategy":"EMA Cross"
}

### Response

{
  "roi":"32%",
  "winRate":"68%"
}

---

## Monitor

GET /api/monitor

Returns active strategy status.

### Response

{
  "active":12,
  "profit":"$4210"
}

---

## Optimize

POST /api/optimize

Optimize strategy parameters.

### Response

{
  "improvement":"18%"
}
