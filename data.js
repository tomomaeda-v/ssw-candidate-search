// 候補者データ:このファイルを編集して候補者を追加・更新してください
const CANDIDATES = [
  {
    "no": 41245,
    "name": "Kyaw Ye Htet",
    "sex": "男",
    "ageBand": "18歳〜19歳",
    "city": "マンダレー",
    "photo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUwIj48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzRhN2ZiNSIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iNTUiIHI9IjI2IiBmaWxsPSIjZThkNWM0Ii8+PHJlY3QgeD0iMjgiIHk9Ijg4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjIiIHJ4PSIxOCIgZmlsbD0iIzJmM2I0YyIvPjx0ZXh0IHg9IjYwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5LWTwvdGV4dD48L3N2Zz4=",
    "video": "",
    "industries": [
      "農業"
    ],
    "jpTest": "JFT-Basic-A2",
    "certificateUrl": "",
    "height": 168,
    "weight": 59,
    "visionLeft": 0.8,
    "visionRight": 1.0,
    "visionBoth": 1.5,
    "allergy": "エビ・カニ",
    "religionFood": "豚肉",
    "education": {
      "from": "2006-06-01",
      "to": "2010-02-01",
      "school": "第3基礎教育中学校",
      "level": "中学校",
      "faculty": "",
      "status": "卒業"
    },
    "workHistory": [
      {
        "from": "2012-10",
        "to": "2013-07",
        "title": "レストランスタッフ",
        "place": "ヤンゴン"
      },
      {
        "from": "2013-04",
        "to": "2014-04",
        "title": "介護施設スタッフ",
        "place": "モーラミャイン"
      },
      {
        "from": "2014-09",
        "to": "2015-04",
        "title": "介護施設スタッフ",
        "place": "バゴー"
      }
    ],
    "registeredAt": "2026-02-25"
  },
  {
    "no": 41244,
    "name": "Su Myat Noe",
    "sex": "女",
    "ageBand": "25歳〜29歳",
    "city": "タウンジー",
    "photo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUwIj48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2I1NWE3ZiIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iNTUiIHI9IjI2IiBmaWxsPSIjZThkNWM0Ii8+PHJlY3QgeD0iMjgiIHk9Ijg4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjIiIHJ4PSIxOCIgZmlsbD0iIzJmM2I0YyIvPjx0ZXh0IHg9IjYwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5TTTwvdGV4dD48L3N2Zz4=",
    "video": "",
    "industries": [
      "外食業"
    ],
    "jpTest": "JFT-Basic-B2",
    "certificateUrl": "",
    "height": 169,
    "weight": 65,
    "visionLeft": 1.0,
    "visionRight": 0.8,
    "visionBoth": 1.0,
    "allergy": "無し",
    "religionFood": "豚肉",
    "education": {
      "from": "2009-06-01",
      "to": "2013-02-01",
      "school": "第3基礎教育中学校",
      "level": "中学校",
      "faculty": "",
      "status": "中退"
    },
    "workHistory": [
      {
        "from": "2019-01",
        "to": "2022-12",
        "title": "販売員",
        "place": "モーラミャイン"
      },
      {
        "from": "2022-07",
        "to": "2023-02",
        "title": "介護施設スタッフ",
        "place": "ネピドー"
      }
    ],
    "registeredAt": "2026-07-08"
  },
  {
    "no": 41243,
    "name": "Aung Ko Min",
    "sex": "男",
    "ageBand": "18歳〜19歳",
    "city": "バゴー",
    "photo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUwIj48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzRhN2ZiNSIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iNTUiIHI9IjI2IiBmaWxsPSIjZThkNWM0Ii8+PHJlY3QgeD0iMjgiIHk9Ijg4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjIiIHJ4PSIxOCIgZmlsbD0iIzJmM2I0YyIvPjx0ZXh0IHg9IjYwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5BSzwvdGV4dD48L3N2Zz4=",
    "video": "",
    "industries": [
      "農業",
      "自動車運送業-バス運転者"
    ],
    "jpTest": "JFT-Basic-A2",
    "certificateUrl": "",
    "height": 158,
    "weight": 56,
    "visionLeft": 1.2,
    "visionRight": 0.8,
    "visionBoth": 1.0,
    "allergy": "無し",
    "religionFood": "豚肉",
    "education": {
      "from": "2006-06-01",
      "to": "2010-02-01",
      "school": "第2基礎教育高等学校",
      "level": "高校",
      "faculty": "",
      "status": "卒業"
    },
    "workHistory": [
      {
        "from": "2014-11",
        "to": "2016-05",
        "title": "縫製工場作業員",
        "place": "モーラミャイン"
      },
      {
        "from": "2016-09",
        "to": "2018-12",
        "title": "農場作業員",
        "place": "マンダレー"
      }
    ],
    "registeredAt": "2026-01-07"
  },
  {
    "no": 41242,
    "name": "Ei Thandar Kyaw",
    "sex": "女",
    "ageBand": "35歳〜39歳",
    "city": "バゴー",
    "photo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUwIj48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2I1NWE3ZiIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iNTUiIHI9IjI2IiBmaWxsPSIjZThkNWM0Ii8+PHJlY3QgeD0iMjgiIHk9Ijg4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjIiIHJ4PSIxOCIgZmlsbD0iIzJmM2I0YyIvPjx0ZXh0IHg9IjYwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5FVDwvdGV4dD48L3N2Zz4=",
    "video": "",
    "industries": [
      "建設業"
    ],
    "jpTest": "JLPT-N5",
    "certificateUrl": "",
    "height": 157,
    "weight": 50,
    "visionLeft": 1.5,
    "visionRight": 0.8,
    "visionBoth": 1.0,
    "allergy": "無し",
    "religionFood": "無し",
    "education": {
      "from": "2014-06-01",
      "to": "2018-02-01",
      "school": "第2基礎教育高等学校",
      "level": "高校",
      "faculty": "",
      "status": "卒業"
    },
    "workHistory": [
      {
        "from": "2021-03",
        "to": "2024-04",
        "title": "介護施設スタッフ",
        "place": "モーラミャイン"
      },
      {
        "from": "2024-12",
        "to": "2027-10",
        "title": "運転手",
        "place": "モーラミャイン"
      }
    ],
    "registeredAt": "2026-07-22"
  },
  {
    "no": 41241,
    "name": "Zaw Lin Tun",
    "sex": "男",
    "ageBand": "30歳〜34歳",
    "city": "パテイン",
    "photo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUwIj48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzRhN2ZiNSIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iNTUiIHI9IjI2IiBmaWxsPSIjZThkNWM0Ii8+PHJlY3QgeD0iMjgiIHk9Ijg4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjIiIHJ4PSIxOCIgZmlsbD0iIzJmM2I0YyIvPjx0ZXh0IHg9IjYwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5aTDwvdGV4dD48L3N2Zz4=",
    "video": "",
    "industries": [
      "ビルクリーニング"
    ],
    "jpTest": "JLPT-N5",
    "certificateUrl": "",
    "height": 166,
    "weight": 53,
    "visionLeft": 0.8,
    "visionRight": 1.2,
    "visionBoth": 1.5,
    "allergy": "無し",
    "religionFood": "無し",
    "education": {
      "from": "2011-06-01",
      "to": "2015-02-01",
      "school": "第3基礎教育中学校",
      "level": "中学校",
      "faculty": "",
      "status": "卒業"
    },
    "workHistory": [
      {
        "from": "2019-11",
        "to": "2020-12",
        "title": "縫製工場作業員",
        "place": "パテイン"
      },
      {
        "from": "2020-11",
        "to": "2023-06",
        "title": "縫製工場作業員",
        "place": "ネピドー"
      },
      {
        "from": "2023-03",
        "to": "2027-08",
        "title": "レストランスタッフ",
        "place": "パテイン"
      }
    ],
    "registeredAt": "2026-02-18"
  },
  {
    "no": 41240,
    "name": "Khin Myat Mon",
    "sex": "女",
    "ageBand": "35歳〜39歳",
    "city": "ヤンゴン",
    "photo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUwIj48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2I1NWE3ZiIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iNTUiIHI9IjI2IiBmaWxsPSIjZThkNWM0Ii8+PHJlY3QgeD0iMjgiIHk9Ijg4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjIiIHJ4PSIxOCIgZmlsbD0iIzJmM2I0YyIvPjx0ZXh0IHg9IjYwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5LTTwvdGV4dD48L3N2Zz4=",
    "video": "",
    "industries": [
      "造船・舶用工業"
    ],
    "jpTest": "JLPT-N3",
    "certificateUrl": "",
    "height": 173,
    "weight": 73,
    "visionLeft": 0.8,
    "visionRight": 1.0,
    "visionBoth": 1.0,
    "allergy": "エビ・カニ",
    "religionFood": "無し",
    "education": {
      "from": "2004-06-01",
      "to": "2008-02-01",
      "school": "第3基礎教育中学校",
      "level": "中学校",
      "faculty": "",
      "status": "卒業"
    },
    "workHistory": [
      {
        "from": "2012-04",
        "to": "2015-01",
        "title": "農場作業員",
        "place": "モーラミャイン"
      }
    ],
    "registeredAt": "2026-07-20"
  },
  {
    "no": 41239,
    "name": "Thura Aung",
    "sex": "男",
    "ageBand": "30歳〜34歳",
    "city": "モーラミャイン",
    "photo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUwIj48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzRhN2ZiNSIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iNTUiIHI9IjI2IiBmaWxsPSIjZThkNWM0Ii8+PHJlY3QgeD0iMjgiIHk9Ijg4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjIiIHJ4PSIxOCIgZmlsbD0iIzJmM2I0YyIvPjx0ZXh0IHg9IjYwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5UQTwvdGV4dD48L3N2Zz4=",
    "video": "",
    "industries": [
      "素形材・産業機械・電気電子情報関連製造業"
    ],
    "jpTest": "JLPT-N4",
    "certificateUrl": "",
    "height": 150,
    "weight": 46,
    "visionLeft": 0.8,
    "visionRight": 1.0,
    "visionBoth": 1.0,
    "allergy": "無し",
    "religionFood": "豚肉",
    "education": {
      "from": "2007-06-01",
      "to": "2011-02-01",
      "school": "第4基礎教育高等学校",
      "level": "高校",
      "faculty": "",
      "status": "卒業"
    },
    "workHistory": [
      {
        "from": "2015-11",
        "to": "2019-11",
        "title": "食品加工工場作業員",
        "place": "バゴー"
      },
      {
        "from": "2019-02",
        "to": "2023-04",
        "title": "農場作業員",
        "place": "ヤンゴン"
      },
      {
        "from": "2023-01",
        "to": "2026-10",
        "title": "介護施設スタッフ",
        "place": "マンダレー"
      }
    ],
    "registeredAt": "2026-02-09"
  },
  {
    "no": 41238,
    "name": "Hnin Wai Phyo",
    "sex": "女",
    "ageBand": "30歳〜34歳",
    "city": "パテイン",
    "photo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUwIj48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2I1NWE3ZiIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iNTUiIHI9IjI2IiBmaWxsPSIjZThkNWM0Ii8+PHJlY3QgeD0iMjgiIHk9Ijg4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjIiIHJ4PSIxOCIgZmlsbD0iIzJmM2I0YyIvPjx0ZXh0IHg9IjYwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5IVzwvdGV4dD48L3N2Zz4=",
    "video": "",
    "industries": [
      "素形材・産業機械・電気電子情報関連製造業"
    ],
    "jpTest": "JFT-Basic-B2",
    "certificateUrl": "",
    "height": 153,
    "weight": 45,
    "visionLeft": 1.5,
    "visionRight": 1.2,
    "visionBoth": 1.0,
    "allergy": "無し",
    "religionFood": "無し",
    "education": {
      "from": "2013-06-01",
      "to": "2017-02-01",
      "school": "第3基礎教育中学校",
      "level": "中学校",
      "faculty": "",
      "status": "卒業"
    },
    "workHistory": [
      {
        "from": "2022-08",
        "to": "2024-07",
        "title": "農場作業員",
        "place": "ヤンゴン"
      },
      {
        "from": "2024-11",
        "to": "2025-07",
        "title": "食品加工工場作業員",
        "place": "バゴー"
      },
      {
        "from": "2025-08",
        "to": "2029-12",
        "title": "レストランスタッフ",
        "place": "パテイン"
      }
    ],
    "registeredAt": "2026-04-05"
  },
  {
    "no": 41237,
    "name": "Min Khant Kyaw",
    "sex": "男",
    "ageBand": "30歳〜34歳",
    "city": "ヤンゴン",
    "photo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUwIj48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzRhN2ZiNSIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iNTUiIHI9IjI2IiBmaWxsPSIjZThkNWM0Ii8+PHJlY3QgeD0iMjgiIHk9Ijg4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjIiIHJ4PSIxOCIgZmlsbD0iIzJmM2I0YyIvPjx0ZXh0IHg9IjYwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5NSzwvdGV4dD48L3N2Zz4=",
    "video": "",
    "industries": [
      "農業"
    ],
    "jpTest": "JFT-Basic-A2",
    "certificateUrl": "",
    "height": 158,
    "weight": 71,
    "visionLeft": 1.2,
    "visionRight": 1.5,
    "visionBoth": 1.5,
    "allergy": "エビ・カニ",
    "religionFood": "無し",
    "education": {
      "from": "2011-06-01",
      "to": "2015-02-01",
      "school": "第1基礎教育高等学校",
      "level": "高校",
      "faculty": "",
      "status": "卒業"
    },
    "workHistory": [
      {
        "from": "2017-11",
        "to": "2018-09",
        "title": "レストランスタッフ",
        "place": "ヤンゴン"
      },
      {
        "from": "2018-03",
        "to": "2020-07",
        "title": "販売員",
        "place": "バゴー"
      },
      {
        "from": "2020-07",
        "to": "2022-01",
        "title": "建設作業員",
        "place": "バゴー"
      }
    ],
    "registeredAt": "2026-02-02"
  },
  {
    "no": 41236,
    "name": "Thiri Aung",
    "sex": "女",
    "ageBand": "35歳〜39歳",
    "city": "タウンジー",
    "photo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUwIj48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2I1NWE3ZiIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iNTUiIHI9IjI2IiBmaWxsPSIjZThkNWM0Ii8+PHJlY3QgeD0iMjgiIHk9Ijg4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjIiIHJ4PSIxOCIgZmlsbD0iIzJmM2I0YyIvPjx0ZXh0IHg9IjYwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5UQTwvdGV4dD48L3N2Zz4=",
    "video": "",
    "industries": [
      "宿泊業"
    ],
    "jpTest": "JLPT-N4",
    "certificateUrl": "",
    "height": 162,
    "weight": 49,
    "visionLeft": 1.0,
    "visionRight": 0.8,
    "visionBoth": 1.5,
    "allergy": "無し",
    "religionFood": "牛肉",
    "education": {
      "from": "2013-06-01",
      "to": "2017-02-01",
      "school": "第3基礎教育中学校",
      "level": "中学校",
      "faculty": "",
      "status": "卒業"
    },
    "workHistory": [
      {
        "from": "2023-01",
        "to": "2025-09",
        "title": "縫製工場作業員",
        "place": "タウンジー"
      },
      {
        "from": "2025-02",
        "to": "2027-10",
        "title": "縫製工場作業員",
        "place": "パテイン"
      }
    ],
    "registeredAt": "2026-05-17"
  },
  {
    "no": 41235,
    "name": "Hein Htet Aung",
    "sex": "男",
    "ageBand": "25歳〜29歳",
    "city": "モーラミャイン",
    "photo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUwIj48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzRhN2ZiNSIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iNTUiIHI9IjI2IiBmaWxsPSIjZThkNWM0Ii8+PHJlY3QgeD0iMjgiIHk9Ijg4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjIiIHJ4PSIxOCIgZmlsbD0iIzJmM2I0YyIvPjx0ZXh0IHg9IjYwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5ISDwvdGV4dD48L3N2Zz4=",
    "video": "",
    "industries": [
      "建設業"
    ],
    "jpTest": "JLPT-N3",
    "certificateUrl": "",
    "height": 152,
    "weight": 55,
    "visionLeft": 1.2,
    "visionRight": 1.0,
    "visionBoth": 1.2,
    "allergy": "無し",
    "religionFood": "無し",
    "education": {
      "from": "2007-06-01",
      "to": "2011-02-01",
      "school": "第2基礎教育高等学校",
      "level": "高校",
      "faculty": "",
      "status": "卒業"
    },
    "workHistory": [
      {
        "from": "2016-11",
        "to": "2018-11",
        "title": "ホテルスタッフ",
        "place": "バゴー"
      },
      {
        "from": "2018-02",
        "to": "2021-01",
        "title": "販売員",
        "place": "モーラミャイン"
      }
    ],
    "registeredAt": "2026-02-15"
  },
  {
    "no": 41234,
    "name": "May Thu Kyaw",
    "sex": "女",
    "ageBand": "35歳〜39歳",
    "city": "バゴー",
    "photo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUwIj48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2I1NWE3ZiIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iNTUiIHI9IjI2IiBmaWxsPSIjZThkNWM0Ii8+PHJlY3QgeD0iMjgiIHk9Ijg4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjIiIHJ4PSIxOCIgZmlsbD0iIzJmM2I0YyIvPjx0ZXh0IHg9IjYwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5NVDwvdGV4dD48L3N2Zz4=",
    "video": "",
    "industries": [
      "造船・舶用工業"
    ],
    "jpTest": "JLPT-N5",
    "certificateUrl": "",
    "height": 178,
    "weight": 45,
    "visionLeft": 0.8,
    "visionRight": 1.5,
    "visionBoth": 1.2,
    "allergy": "無し",
    "religionFood": "無し",
    "education": {
      "from": "2014-06-01",
      "to": "2018-02-01",
      "school": "ヤンゴン工科大学",
      "level": "大学",
      "faculty": "工学部",
      "status": "卒業"
    },
    "workHistory": [
      {
        "from": "2022-03",
        "to": "2023-05",
        "title": "縫製工場作業員",
        "place": "ヤンゴン"
      },
      {
        "from": "2023-05",
        "to": "2025-05",
        "title": "農場作業員",
        "place": "パテイン"
      },
      {
        "from": "2025-04",
        "to": "2028-11",
        "title": "ホテルスタッフ",
        "place": "モーラミャイン"
      }
    ],
    "registeredAt": "2026-02-21"
  },
  {
    "no": 41233,
    "name": "Ye Yint Naing",
    "sex": "男",
    "ageBand": "25歳〜29歳",
    "city": "タウンジー",
    "photo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUwIj48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzRhN2ZiNSIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iNTUiIHI9IjI2IiBmaWxsPSIjZThkNWM0Ii8+PHJlY3QgeD0iMjgiIHk9Ijg4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjIiIHJ4PSIxOCIgZmlsbD0iIzJmM2I0YyIvPjx0ZXh0IHg9IjYwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5ZWTwvdGV4dD48L3N2Zz4=",
    "video": "",
    "industries": [
      "自動車運送業-バス運転者"
    ],
    "jpTest": "JLPT-N5",
    "certificateUrl": "",
    "height": 168,
    "weight": 51,
    "visionLeft": 1.5,
    "visionRight": 1.0,
    "visionBoth": 1.0,
    "allergy": "無し",
    "religionFood": "豚肉",
    "education": {
      "from": "2012-06-01",
      "to": "2016-02-01",
      "school": "第2基礎教育高等学校",
      "level": "高校",
      "faculty": "",
      "status": "中退"
    },
    "workHistory": [
      {
        "from": "2018-12",
        "to": "2019-03",
        "title": "介護施設スタッフ",
        "place": "ヤンゴン"
      }
    ],
    "registeredAt": "2026-07-28"
  },
  {
    "no": 41232,
    "name": "Nandar Win",
    "sex": "女",
    "ageBand": "18歳〜19歳",
    "city": "パテイン",
    "photo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUwIj48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2I1NWE3ZiIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iNTUiIHI9IjI2IiBmaWxsPSIjZThkNWM0Ii8+PHJlY3QgeD0iMjgiIHk9Ijg4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjIiIHJ4PSIxOCIgZmlsbD0iIzJmM2I0YyIvPjx0ZXh0IHg9IjYwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5OVzwvdGV4dD48L3N2Zz4=",
    "video": "",
    "industries": [
      "建設業"
    ],
    "jpTest": "JLPT-N5",
    "certificateUrl": "",
    "height": 175,
    "weight": 68,
    "visionLeft": 1.0,
    "visionRight": 1.2,
    "visionBoth": 1.0,
    "allergy": "無し",
    "religionFood": "牛肉",
    "education": {
      "from": "2005-06-01",
      "to": "2009-02-01",
      "school": "第4基礎教育高等学校",
      "level": "高校",
      "faculty": "",
      "status": "中退"
    },
    "workHistory": [
      {
        "from": "2015-10",
        "to": "2019-12",
        "title": "建設作業員",
        "place": "マンダレー"
      },
      {
        "from": "2019-03",
        "to": "2021-07",
        "title": "レストランスタッフ",
        "place": "マンダレー"
      }
    ],
    "registeredAt": "2026-07-16"
  },
  {
    "no": 41231,
    "name": "Nay Lin Htet",
    "sex": "男",
    "ageBand": "20歳〜24歳",
    "city": "ヤンゴン",
    "photo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUwIj48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzRhN2ZiNSIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iNTUiIHI9IjI2IiBmaWxsPSIjZThkNWM0Ii8+PHJlY3QgeD0iMjgiIHk9Ijg4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjIiIHJ4PSIxOCIgZmlsbD0iIzJmM2I0YyIvPjx0ZXh0IHg9IjYwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5OTDwvdGV4dD48L3N2Zz4=",
    "video": "",
    "industries": [
      "自動車運送業-バス運転者"
    ],
    "jpTest": "JLPT-N5",
    "certificateUrl": "",
    "height": 161,
    "weight": 74,
    "visionLeft": 1.5,
    "visionRight": 1.2,
    "visionBoth": 1.0,
    "allergy": "無し",
    "religionFood": "豚肉",
    "education": {
      "from": "2007-06-01",
      "to": "2011-02-01",
      "school": "第3基礎教育中学校",
      "level": "中学校",
      "faculty": "",
      "status": "卒業"
    },
    "workHistory": [
      {
        "from": "2013-07",
        "to": "2015-06",
        "title": "ホテルスタッフ",
        "place": "タウンジー"
      }
    ],
    "registeredAt": "2026-03-02"
  },
  {
    "no": 41230,
    "name": "Shwe Yi Oo",
    "sex": "女",
    "ageBand": "18歳〜19歳",
    "city": "ネピドー",
    "photo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUwIj48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2I1NWE3ZiIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iNTUiIHI9IjI2IiBmaWxsPSIjZThkNWM0Ii8+PHJlY3QgeD0iMjgiIHk9Ijg4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjIiIHJ4PSIxOCIgZmlsbD0iIzJmM2I0YyIvPjx0ZXh0IHg9IjYwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5TWTwvdGV4dD48L3N2Zz4=",
    "video": "",
    "industries": [
      "宿泊業",
      "造船・舶用工業"
    ],
    "jpTest": "JFT-Basic-B1",
    "certificateUrl": "",
    "height": 160,
    "weight": 49,
    "visionLeft": 1.2,
    "visionRight": 1.2,
    "visionBoth": 1.5,
    "allergy": "エビ・カニ",
    "religionFood": "豚肉",
    "education": {
      "from": "2005-06-01",
      "to": "2009-02-01",
      "school": "第4基礎教育高等学校",
      "level": "高校",
      "faculty": "",
      "status": "卒業"
    },
    "workHistory": [
      {
        "from": "2015-05",
        "to": "2017-01",
        "title": "運転手",
        "place": "ヤンゴン"
      },
      {
        "from": "2017-06",
        "to": "2019-07",
        "title": "縫製工場作業員",
        "place": "パテイン"
      }
    ],
    "registeredAt": "2026-03-18"
  },
  {
    "no": 41229,
    "name": "Soe Moe Aung",
    "sex": "男",
    "ageBand": "20歳〜24歳",
    "city": "バゴー",
    "photo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUwIj48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzRhN2ZiNSIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iNTUiIHI9IjI2IiBmaWxsPSIjZThkNWM0Ii8+PHJlY3QgeD0iMjgiIHk9Ijg4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjIiIHJ4PSIxOCIgZmlsbD0iIzJmM2I0YyIvPjx0ZXh0IHg9IjYwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5TTTwvdGV4dD48L3N2Zz4=",
    "video": "",
    "industries": [
      "ビルクリーニング"
    ],
    "jpTest": "JFT-Basic-B2",
    "certificateUrl": "",
    "height": 155,
    "weight": 47,
    "visionLeft": 1.2,
    "visionRight": 1.2,
    "visionBoth": 1.0,
    "allergy": "無し",
    "religionFood": "豚肉",
    "education": {
      "from": "2014-06-01",
      "to": "2018-02-01",
      "school": "第2基礎教育高等学校",
      "level": "高校",
      "faculty": "",
      "status": "卒業"
    },
    "workHistory": [
      {
        "from": "2021-07",
        "to": "2024-09",
        "title": "レストランスタッフ",
        "place": "ネピドー"
      },
      {
        "from": "2024-04",
        "to": "2027-07",
        "title": "食品加工工場作業員",
        "place": "バゴー"
      },
      {
        "from": "2027-08",
        "to": "2031-11",
        "title": "農場作業員",
        "place": "モーラミャイン"
      }
    ],
    "registeredAt": "2026-02-05"
  },
  {
    "no": 41228,
    "name": "Zin Mar Htay",
    "sex": "女",
    "ageBand": "18歳〜19歳",
    "city": "タウンジー",
    "photo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUwIj48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2I1NWE3ZiIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iNTUiIHI9IjI2IiBmaWxsPSIjZThkNWM0Ii8+PHJlY3QgeD0iMjgiIHk9Ijg4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjIiIHJ4PSIxOCIgZmlsbD0iIzJmM2I0YyIvPjx0ZXh0IHg9IjYwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5aTTwvdGV4dD48L3N2Zz4=",
    "video": "",
    "industries": [
      "建設業"
    ],
    "jpTest": "JLPT-N3",
    "certificateUrl": "",
    "height": 174,
    "weight": 69,
    "visionLeft": 1.0,
    "visionRight": 1.0,
    "visionBoth": 1.5,
    "allergy": "エビ・カニ",
    "religionFood": "無し",
    "education": {
      "from": "2011-06-01",
      "to": "2015-02-01",
      "school": "ヤンゴン工科大学",
      "level": "大学",
      "faculty": "工学部",
      "status": "卒業"
    },
    "workHistory": [
      {
        "from": "2021-12",
        "to": "2023-12",
        "title": "運転手",
        "place": "バゴー"
      },
      {
        "from": "2023-04",
        "to": "2027-03",
        "title": "レストランスタッフ",
        "place": "タウンジー"
      }
    ],
    "registeredAt": "2026-07-04"
  },
  {
    "no": 41227,
    "name": "Phyo Wai Yan",
    "sex": "男",
    "ageBand": "30歳〜34歳",
    "city": "パテイン",
    "photo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUwIj48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzRhN2ZiNSIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iNTUiIHI9IjI2IiBmaWxsPSIjZThkNWM0Ii8+PHJlY3QgeD0iMjgiIHk9Ijg4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjIiIHJ4PSIxOCIgZmlsbD0iIzJmM2I0YyIvPjx0ZXh0IHg9IjYwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5QVzwvdGV4dD48L3N2Zz4=",
    "video": "",
    "industries": [
      "自動車運送業-バス運転者"
    ],
    "jpTest": "JLPT-N5",
    "certificateUrl": "",
    "height": 174,
    "weight": 75,
    "visionLeft": 1.5,
    "visionRight": 1.0,
    "visionBoth": 1.2,
    "allergy": "エビ・カニ",
    "religionFood": "無し",
    "education": {
      "from": "2013-06-01",
      "to": "2017-02-01",
      "school": "第4基礎教育高等学校",
      "level": "高校",
      "faculty": "",
      "status": "卒業"
    },
    "workHistory": [
      {
        "from": "2022-09",
        "to": "2026-08",
        "title": "建設作業員",
        "place": "パテイン"
      },
      {
        "from": "2026-08",
        "to": "2030-05",
        "title": "農場作業員",
        "place": "タウンジー"
      }
    ],
    "registeredAt": "2026-02-09"
  },
  {
    "no": 41226,
    "name": "Aye Chan Moe",
    "sex": "女",
    "ageBand": "25歳〜29歳",
    "city": "バゴー",
    "photo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUwIj48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2I1NWE3ZiIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iNTUiIHI9IjI2IiBmaWxsPSIjZThkNWM0Ii8+PHJlY3QgeD0iMjgiIHk9Ijg4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjIiIHJ4PSIxOCIgZmlsbD0iIzJmM2I0YyIvPjx0ZXh0IHg9IjYwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5BQzwvdGV4dD48L3N2Zz4=",
    "video": "",
    "industries": [
      "素形材・産業機械・電気電子情報関連製造業"
    ],
    "jpTest": "JLPT-N5",
    "certificateUrl": "",
    "height": 167,
    "weight": 71,
    "visionLeft": 1.5,
    "visionRight": 0.8,
    "visionBoth": 1.0,
    "allergy": "エビ・カニ",
    "religionFood": "牛肉",
    "education": {
      "from": "2006-06-01",
      "to": "2010-02-01",
      "school": "第3基礎教育中学校",
      "level": "中学校",
      "faculty": "",
      "status": "中退"
    },
    "workHistory": [
      {
        "from": "2015-12",
        "to": "2017-04",
        "title": "縫製工場作業員",
        "place": "バゴー"
      }
    ],
    "registeredAt": "2026-05-23"
  },
  {
    "no": 41225,
    "name": "Kaung Myat Thu",
    "sex": "男",
    "ageBand": "18歳〜19歳",
    "city": "モーラミャイン",
    "photo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUwIj48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzRhN2ZiNSIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iNTUiIHI9IjI2IiBmaWxsPSIjZThkNWM0Ii8+PHJlY3QgeD0iMjgiIHk9Ijg4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjIiIHJ4PSIxOCIgZmlsbD0iIzJmM2I0YyIvPjx0ZXh0IHg9IjYwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5LTTwvdGV4dD48L3N2Zz4=",
    "video": "",
    "industries": [
      "自動車運送業-バス運転者",
      "介護"
    ],
    "jpTest": "JFT-Basic-B1",
    "certificateUrl": "",
    "height": 150,
    "weight": 67,
    "visionLeft": 0.8,
    "visionRight": 0.8,
    "visionBoth": 1.5,
    "allergy": "エビ・カニ",
    "religionFood": "無し",
    "education": {
      "from": "2010-06-01",
      "to": "2014-02-01",
      "school": "ダゴン大学",
      "level": "大学",
      "faculty": "理学部",
      "status": "中退"
    },
    "workHistory": [
      {
        "from": "2020-08",
        "to": "2022-04",
        "title": "ホテルスタッフ",
        "place": "バゴー"
      },
      {
        "from": "2022-01",
        "to": "2026-07",
        "title": "食品加工工場作業員",
        "place": "パテイン"
      },
      {
        "from": "2026-12",
        "to": "2030-03",
        "title": "販売員",
        "place": "マンダレー"
      }
    ],
    "registeredAt": "2026-02-02"
  },
  {
    "no": 41224,
    "name": "Phyu Phyu Thin",
    "sex": "女",
    "ageBand": "25歳〜29歳",
    "city": "パテイン",
    "photo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUwIj48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2I1NWE3ZiIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iNTUiIHI9IjI2IiBmaWxsPSIjZThkNWM0Ii8+PHJlY3QgeD0iMjgiIHk9Ijg4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjIiIHJ4PSIxOCIgZmlsbD0iIzJmM2I0YyIvPjx0ZXh0IHg9IjYwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5QUDwvdGV4dD48L3N2Zz4=",
    "video": "",
    "industries": [
      "宿泊業",
      "建設業"
    ],
    "jpTest": "JLPT-N3",
    "certificateUrl": "",
    "height": 174,
    "weight": 43,
    "visionLeft": 1.0,
    "visionRight": 1.0,
    "visionBoth": 1.0,
    "allergy": "無し",
    "religionFood": "無し",
    "education": {
      "from": "2010-06-01",
      "to": "2014-02-01",
      "school": "第2基礎教育高等学校",
      "level": "高校",
      "faculty": "",
      "status": "卒業"
    },
    "workHistory": [
      {
        "from": "2019-02",
        "to": "2022-08",
        "title": "レストランスタッフ",
        "place": "パテイン"
      },
      {
        "from": "2022-06",
        "to": "2023-04",
        "title": "縫製工場作業員",
        "place": "タウンジー"
      }
    ],
    "registeredAt": "2026-06-04"
  },
  {
    "no": 41223,
    "name": "Htet Aung Lin",
    "sex": "男",
    "ageBand": "35歳〜39歳",
    "city": "パテイン",
    "photo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUwIj48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzRhN2ZiNSIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iNTUiIHI9IjI2IiBmaWxsPSIjZThkNWM0Ii8+PHJlY3QgeD0iMjgiIHk9Ijg4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjIiIHJ4PSIxOCIgZmlsbD0iIzJmM2I0YyIvPjx0ZXh0IHg9IjYwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5IQTwvdGV4dD48L3N2Zz4=",
    "video": "",
    "industries": [
      "自動車運送業-バス運転者"
    ],
    "jpTest": "JLPT-N5",
    "certificateUrl": "",
    "height": 177,
    "weight": 49,
    "visionLeft": 0.8,
    "visionRight": 1.2,
    "visionBoth": 1.5,
    "allergy": "エビ・カニ",
    "religionFood": "豚肉",
    "education": {
      "from": "2006-06-01",
      "to": "2010-02-01",
      "school": "第2基礎教育高等学校",
      "level": "高校",
      "faculty": "",
      "status": "卒業"
    },
    "workHistory": [
      {
        "from": "2016-03",
        "to": "2017-05",
        "title": "縫製工場作業員",
        "place": "モーラミャイン"
      },
      {
        "from": "2017-05",
        "to": "2018-10",
        "title": "運転手",
        "place": "バゴー"
      },
      {
        "from": "2018-02",
        "to": "2020-10",
        "title": "農場作業員",
        "place": "ヤンゴン"
      }
    ],
    "registeredAt": "2026-06-11"
  },
  {
    "no": 41222,
    "name": "Yoon Shwe Yi",
    "sex": "女",
    "ageBand": "18歳〜19歳",
    "city": "バゴー",
    "photo": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUwIj48cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2I1NWE3ZiIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iNTUiIHI9IjI2IiBmaWxsPSIjZThkNWM0Ii8+PHJlY3QgeD0iMjgiIHk9Ijg4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjIiIHJ4PSIxOCIgZmlsbD0iIzJmM2I0YyIvPjx0ZXh0IHg9IjYwIiB5PSIxNDAiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5ZUzwvdGV4dD48L3N2Zz4=",
    "video": "",
    "industries": [
      "自動車運送業-バス運転者",
      "外食業"
    ],
    "jpTest": "JFT-Basic-B2",
    "certificateUrl": "",
    "height": 168,
    "weight": 59,
    "visionLeft": 1.2,
    "visionRight": 1.0,
    "visionBoth": 1.0,
    "allergy": "無し",
    "religionFood": "牛肉",
    "education": {
      "from": "2014-06-01",
      "to": "2018-02-01",
      "school": "第2基礎教育高等学校",
      "level": "高校",
      "faculty": "",
      "status": "卒業"
    },
    "workHistory": [
      {
        "from": "2021-03",
        "to": "2025-12",
        "title": "介護施設スタッフ",
        "place": "パテイン"
      },
      {
        "from": "2025-10",
        "to": "2028-09",
        "title": "販売員",
        "place": "バゴー"
      }
    ],
    "registeredAt": "2026-04-19"
  }
];
