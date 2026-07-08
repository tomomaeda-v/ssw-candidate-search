# 特定技能候補者リアルタイム検索機能

特定技能(SSW)候補者を検索・閲覧できるWebアプリです。GitHub Pagesで無料公開できます。

## 構成

| ファイル | 内容 |
|---|---|
| `index.html` | アプリ本体(一覧・検索・詳細) |
| `admin.html` | 候補者入力フォーム(管理用) |
| `data.js` | 候補者データ |

## GitHub Pagesでの公開手順

1. GitHubで新しいリポジトリを作成(例: `ssw-candidate-search`)
2. `index.html` と `data.js` をアップロード(Add file → Upload files)
3. リポジトリの **Settings → Pages** を開く
4. Source: **Deploy from a branch** / Branch: **main** / フォルダ: **/(root)** を選び Save
5. 数分後、以下のURLで公開されます:
   `https://<ユーザー名>.github.io/ssw-candidate-search/`

## データの更新方法(フォーム入力)

1. `admin.html` を開く(公開URLの末尾に `admin.html` を付ける、またはローカルで開く)
2. 「新規追加」または「編集」で履歴書情報・顔写真・動画URLを入力して保存
3. 「data.jsをダウンロード」を押す
4. ダウンロードした `data.js` をGitHubリポジトリにアップロード(上書きコミット)
5. 1〜2分でサイトに反映

動画は YouTube(限定公開推奨)・Google Drive・mp4直リンクのURLに対応しています。

`data.js` を直接編集してコミットしても反映されます。

候補者1名分のフォーマット:

```js
{
  "no": 41245,                       // 候補者番号(一意)
  "name": "Kyaw Ye Htet",
  "sex": "男",                        // "男" または "女"
  "ageBand": "30歳〜34歳",
  "city": "ヤンゴン",
  "photo": "images/41245.jpg",        // 画像パスまたはURL
  "video": "",                        // 自己紹介動画URL(mp4等。空なら非表示)
  "industries": ["自動車運送業-バス運転者"],  // 合格済み技能評価試験
  "jpTest": "JLPT-N4",                // 合格済み日本語試験
  "certificateUrl": "",               // 合格証PDF等のURL(任意)
  "height": 167, "weight": 72,
  "visionLeft": 1.5, "visionRight": 1.2, "visionBoth": 1.5,
  "allergy": "無し",
  "religionFood": "無し",
  "education": {
    "from": "2004-06-01", "to": "2008-02-01",
    "school": "第3基礎教育中学校", "level": "中学校",
    "faculty": "", "status": "卒業"
  },
  "workHistory": [
    { "from": "2015-03", "to": "2018-06", "title": "運転手", "place": "ヤンゴン" }
  ],
  "registeredAt": "2026-07-01"        // 並べ替え用の登録日
}
```

- 顔写真は `images/` フォルダを作ってアップロードし、`"photo": "images/xxx.jpg"` で参照するのが簡単です(現在はダミーのSVGアバターが埋め込まれています)
- フィルターの選択肢(試験・年齢帯など)はデータから自動生成されるため、設定変更は不要です

## 注意

- 現在のデータは**ダミー**です。実在の人物ではありません
- 誰でも閲覧可能な公開サイトになるため、実データを載せる際は個人情報の扱いにご注意ください
