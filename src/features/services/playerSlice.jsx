import { createSlice } from '@reduxjs/toolkit'

const initialState={
    songQueue:[
      {
        "layout": "5",
        "type": "MUSIC",
        "key": "322777165",
        "title": "Scars",
        "subtitle": "I Prevail",
        "share": {
          "subject": "Scars - I Prevail",
          "text": "I used Shazam to discover Scars by I Prevail.",
          "href": "https://www.shazam.com/track/322777165/scars",
          "image": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/32/3e/74/323e7488-51b7-dab0-12bf-2c7c0d0931b0/00888072012424.rgb.jpg/400x400cc.jpg",
          "twitter": "I used @Shazam to discover Scars by I Prevail.",
          "html": "https://www.shazam.com/snippets/email-share/322777165?lang=en&country=US",
          "avatar": "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/d3/21/54/d32154ab-0285-05fc-9072-abb9d172f444/pr_source.png/800x800cc.jpg",
          "snapchat": "https://www.shazam.com/partner/sc/track/322777165"
        },
        "images": {
          "background": "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/d3/21/54/d32154ab-0285-05fc-9072-abb9d172f444/pr_source.png/800x800cc.jpg",
          "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/32/3e/74/323e7488-51b7-dab0-12bf-2c7c0d0931b0/00888072012424.rgb.jpg/400x400cc.jpg",
          "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/32/3e/74/323e7488-51b7-dab0-12bf-2c7c0d0931b0/00888072012424.rgb.jpg/400x400cc.jpg",
          "joecolor": "b:000000p:ffffffs:fda932t:cbcbcbq:ca8728"
        },
        "hub": {
          "type": "APPLEMUSIC",
          "image": "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
          "actions": [
            {
              "name": "apple",
              "type": "applemusicplay",
              "id": "1440941609"
            },
            {
              "name": "apple",
              "type": "uri",
              "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/23/78/58/237858a4-f5b7-c1c5-5d59-0c2a0f967148/mzaf_14907750420876890762.plus.aac.ep.m4a"
            }
          ],
          "options": [
            {
              "caption": "OPEN",
              "actions": [
                {
                  "name": "hub:applemusic:deeplink",
                  "type": "intent",
                  "uri": "intent://music.apple.com/us/album/scars/1440941604?i=1440941609&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end"
                },
                {
                  "name": "hub:applemusic:connect",
                  "type": "applemusicconnect",
                  "id": "1440941609",
                  "uri": "https://unsupported.shazam.com"
                },
                {
                  "name": "hub:applemusic:androidstore",
                  "type": "uri",
                  "uri": "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am"
                }
              ],
              "beacondata": {
                "type": "open",
                "providername": "applemusic"
              },
              "image": "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
              "type": "open",
              "listcaption": "Open in Apple Music",
              "overflowimage": "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
              "colouroverflowimage": false,
              "providername": "applemusic"
            }
          ],
          "providers": [
            {
              "caption": "Open in Spotify",
              "images": {
                "overflow": "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                "default": "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png"
              },
              "actions": [
                {
                  "name": "hub:spotify:searchdeeplink",
                  "type": "uri",
                  "uri": "spotify:search:Scars%20I%20Prevail"
                }
              ],
              "type": "SPOTIFY"
            },
            {
              "caption": "Open in YouTube Music",
              "images": {
                "overflow": "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                "default": "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png"
              },
              "actions": [
                {
                  "name": "hub:youtubemusic:androiddeeplink",
                  "type": "uri",
                  "uri": "https://music.youtube.com/search?q=Scars+I+Prevail&feature=shazam"
                }
              ],
              "type": "YOUTUBEMUSIC"
            },
            {
              "caption": "Open in Deezer",
              "images": {
                "overflow": "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                "default": "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png"
              },
              "actions": [
                {
                  "name": "hub:deezer:searchdeeplink",
                  "type": "uri",
                  "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Scars%27%20artist%3A%27I+Prevail%27%7D"
                }
              ],
              "type": "DEEZER"
            }
          ],
          "explicit": false,
          "displayname": "APPLE MUSIC"
        },
        "artists": [
          {
            "id": "42",
            "adamid": "948448824"
          }
        ],
        "url": "https://www.shazam.com/track/322777165/scars"
      },{
      "layout": "5",
      "type": "MUSIC",
      "key": "526476594",
      "title": "Nobody Else",
      "subtitle": "Cole Norton",
      "share": {
        "subject": "Nobody Else - Cole Norton",
        "text": "I used Shazam to discover Nobody Else by Cole Norton.",
        "href": "https://www.shazam.com/track/526476594/nobody-else",
        "image": "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/53/a9/d1/53a9d186-8e07-1fa0-c7af-d56354602280/ab69d7d2-3b78-4fd0-add6-7d4692124b31.jpg/400x400cc.jpg",
        "twitter": "I used @Shazam to discover Nobody Else by Cole Norton.",
        "html": "https://www.shazam.com/snippets/email-share/526476594?lang=en&country=US",
        "avatar": "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/e5/94/33/e59433f9-33c5-65f2-83e7-354637984593/pr_source.png/800x800cc.jpg",
        "snapchat": "https://www.shazam.com/partner/sc/track/526476594"
      },
      "images": {
        "background": "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/e5/94/33/e59433f9-33c5-65f2-83e7-354637984593/pr_source.png/800x800cc.jpg",
        "coverart": "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/53/a9/d1/53a9d186-8e07-1fa0-c7af-d56354602280/ab69d7d2-3b78-4fd0-add6-7d4692124b31.jpg/400x400cc.jpg",
        "coverarthq": "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/53/a9/d1/53a9d186-8e07-1fa0-c7af-d56354602280/ab69d7d2-3b78-4fd0-add6-7d4692124b31.jpg/400x400cc.jpg",
        "joecolor": "b:f0f8fap:15181ds:1e1d24t:404549q:48494e"
      },
      "hub": {
        "type": "APPLEMUSIC",
        "image": "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
        "actions": [
          {
            "name": "apple",
            "type": "applemusicplay",
            "id": "1596123939"
          },
          {
            "name": "apple",
            "type": "uri",
            "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/e3/27/b8/e327b813-167c-ec60-b02f-21dc8ec5c70f/mzaf_14084597681301988563.plus.aac.ep.m4a"
          }
        ],
        "options": [
          {
            "caption": "OPEN",
            "actions": [
              {
                "name": "hub:applemusic:deeplink",
                "type": "intent",
                "uri": "intent://music.apple.com/us/album/nobody-else/1596123936?i=1596123939&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end"
              },
              {
                "name": "hub:applemusic:connect",
                "type": "applemusicconnect",
                "id": "1596123939",
                "uri": "https://unsupported.shazam.com"
              },
              {
                "name": "hub:applemusic:androidstore",
                "type": "uri",
                "uri": "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am"
              }
            ],
            "beacondata": {
              "type": "open",
              "providername": "applemusic"
            },
            "image": "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
            "type": "open",
            "listcaption": "Open in Apple Music",
            "overflowimage": "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
            "colouroverflowimage": false,
            "providername": "applemusic"
          }
        ],
        "providers": [
          {
            "caption": "Open in Spotify",
            "images": {
              "overflow": "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
              "default": "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png"
            },
            "actions": [
              {
                "name": "hub:spotify:searchdeeplink",
                "type": "uri",
                "uri": "spotify:search:Nobody%20Else%20Cole%20Norton"
              }
            ],
            "type": "SPOTIFY"
          },
          {
            "caption": "Open in YouTube Music",
            "images": {
              "overflow": "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
              "default": "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png"
            },
            "actions": [
              {
                "name": "hub:youtubemusic:androiddeeplink",
                "type": "uri",
                "uri": "https://music.youtube.com/search?q=Nobody+Else+Cole+Norton&feature=shazam"
              }
            ],
            "type": "YOUTUBEMUSIC"
          },
          {
            "caption": "Open in Deezer",
            "images": {
              "overflow": "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
              "default": "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png"
            },
            "actions": [
              {
                "name": "hub:deezer:searchdeeplink",
                "type": "uri",
                "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Nobody+Else%27%20artist%3A%27Cole+Norton%27%7D"
              }
            ],
            "type": "DEEZER"
          }
        ],
        "explicit": true,
        "displayname": "APPLE MUSIC"
      },
      "artists": [
        {
          "id": "42",
          "adamid": "1328748437"
        }
      ],
      "url": "https://www.shazam.com/track/526476594/nobody-else"
}
,{
      "layout": "5",
      "type": "MUSIC",
      "key": "591268083",
      "title": "if you chase two rabbits",
      "subtitle": "OKAY! KENJI",
      "share": {
        "subject": "if you chase two rabbits - OKAY! KENJI",
        "text": "I used Shazam to discover if you chase two rabbits by OKAY! KENJI.",
        "href": "https://www.shazam.com/track/591268083/if-you-chase-two-rabbits",
        "image": "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/62/1e/fa/621efabe-6c92-42f7-c17c-d95f38beeb7a/5056495306948_1.jpg/400x400cc.jpg",
        "twitter": "I used @Shazam to discover if you chase two rabbits by OKAY! KENJI.",
        "html": "https://www.shazam.com/snippets/email-share/591268083?lang=en&country=US",
        "avatar": "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/f7/b1/dd/f7b1dd1f-60c4-bc88-a518-a1e9e0a48c27/pr_source.png/800x800cc.jpg",
        "snapchat": "https://www.shazam.com/partner/sc/track/591268083"
      },
      "images": {
        "background": "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/f7/b1/dd/f7b1dd1f-60c4-bc88-a518-a1e9e0a48c27/pr_source.png/800x800cc.jpg",
        "coverart": "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/62/1e/fa/621efabe-6c92-42f7-c17c-d95f38beeb7a/5056495306948_1.jpg/400x400cc.jpg",
        "coverarthq": "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/62/1e/fa/621efabe-6c92-42f7-c17c-d95f38beeb7a/5056495306948_1.jpg/400x400cc.jpg",
        "joecolor": "b:000000p:e8e8e8s:00edeet:b9b9b9q:00bdbe"
      },
      "hub": {
        "type": "APPLEMUSIC",
        "image": "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
        "actions": [
          {
            "name": "apple",
            "type": "applemusicplay",
            "id": "1608060707"
          },
          {
            "name": "apple",
            "type": "uri",
            "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/62/48/00/624800fa-5d2a-d5ca-2da9-069f90921833/mzaf_6902694186791312374.plus.aac.p.m4a"
          }
        ],
        "options": [
          {
            "caption": "OPEN",
            "actions": [
              {
                "name": "hub:applemusic:deeplink",
                "type": "intent",
                "uri": "intent://music.apple.com/us/album/if-you-chase-two-rabbits/1608060534?i=1608060707&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end"
              },
              {
                "name": "hub:applemusic:connect",
                "type": "applemusicconnect",
                "id": "1608060707",
                "uri": "https://unsupported.shazam.com"
              },
              {
                "name": "hub:applemusic:androidstore",
                "type": "uri",
                "uri": "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am"
              }
            ],
            "beacondata": {
              "type": "open",
              "providername": "applemusic"
            },
            "image": "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
            "type": "open",
            "listcaption": "Open in Apple Music",
            "overflowimage": "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
            "colouroverflowimage": false,
            "providername": "applemusic"
          }
        ],
        "providers": [
          {
            "caption": "Open in Spotify",
            "images": {
              "overflow": "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
              "default": "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png"
            },
            "actions": [
              {
                "name": "hub:spotify:searchdeeplink",
                "type": "uri",
                "uri": "spotify:search:if%20you%20chase%20two%20rabbits%20OKAY%21%20KENJI"
              }
            ],
            "type": "SPOTIFY"
          },
          {
            "caption": "Open in YouTube Music",
            "images": {
              "overflow": "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
              "default": "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png"
            },
            "actions": [
              {
                "name": "hub:youtubemusic:androiddeeplink",
                "type": "uri",
                "uri": "https://music.youtube.com/search?q=if+you+chase+two+rabbits+OKAY%21+KENJI&feature=shazam"
              }
            ],
            "type": "YOUTUBEMUSIC"
          },
          {
            "caption": "Open in Deezer",
            "images": {
              "overflow": "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
              "default": "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png"
            },
            "actions": [
              {
                "name": "hub:deezer:searchdeeplink",
                "type": "uri",
                "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27if+you+chase+two+rabbits%27%20artist%3A%27OKAY%21+KENJI%27%7D"
              }
            ],
            "type": "DEEZER"
          }
        ],
        "explicit": false,
        "displayname": "APPLE MUSIC"
      },
      "artists": [
        {
          "id": "42",
          "adamid": "1476414979"
        }
      ],
      "url": "https://www.shazam.com/track/591268083/if-you-chase-two-rabbits"
}
,{
      "layout": "5",
      "type": "MUSIC",
      "key": "632320946",
      "title": "Fine",
      "subtitle": "Kyle Hume",
      "share": {
        "subject": "Fine - Kyle Hume",
        "text": "I used Shazam to discover Fine by Kyle Hume.",
        "href": "https://www.shazam.com/track/632320946/fine",
        "image": "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/64/68/ff/6468ffdc-5f85-3ddc-39a5-930e096282ab/artwork.jpg/400x400cc.jpg",
        "twitter": "I used @Shazam to discover Fine by Kyle Hume.",
        "html": "https://www.shazam.com/snippets/email-share/632320946?lang=en&country=US",
        "avatar": "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/a0/86/5d/a0865d44-1ac4-6d3c-ef44-d1a36da07b4b/pr_source.png/800x800cc.jpg",
        "snapchat": "https://www.shazam.com/partner/sc/track/632320946"
      },
      "images": {
        "background": "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/a0/86/5d/a0865d44-1ac4-6d3c-ef44-d1a36da07b4b/pr_source.png/800x800cc.jpg",
        "coverart": "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/64/68/ff/6468ffdc-5f85-3ddc-39a5-930e096282ab/artwork.jpg/400x400cc.jpg",
        "coverarthq": "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/64/68/ff/6468ffdc-5f85-3ddc-39a5-930e096282ab/artwork.jpg/400x400cc.jpg",
        "joecolor": "b:fdaf17p:100909s:291c06t:3f2a0cq:533a09"
      },
      "hub": {
        "type": "APPLEMUSIC",
        "image": "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
        "actions": [
          {
            "name": "apple",
            "type": "applemusicplay",
            "id": "1644629936"
          },
          {
            "name": "apple",
            "type": "uri",
            "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/db/c1/b9/dbc1b92f-3502-3c5b-4476-fa7932e7afdf/mzaf_3327073621106824267.plus.aac.ep.m4a"
          }
        ],
        "options": [
          {
            "caption": "OPEN",
            "actions": [
              {
                "name": "hub:applemusic:deeplink",
                "type": "intent",
                "uri": "intent://music.apple.com/us/album/fine/1644629935?i=1644629936&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end"
              },
              {
                "name": "hub:applemusic:connect",
                "type": "applemusicconnect",
                "id": "1644629936",
                "uri": "https://unsupported.shazam.com"
              },
              {
                "name": "hub:applemusic:androidstore",
                "type": "uri",
                "uri": "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am"
              }
            ],
            "beacondata": {
              "type": "open",
              "providername": "applemusic"
            },
            "image": "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
            "type": "open",
            "listcaption": "Open in Apple Music",
            "overflowimage": "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
            "colouroverflowimage": false,
            "providername": "applemusic"
          }
        ],
        "providers": [
          {
            "caption": "Open in Spotify",
            "images": {
              "overflow": "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
              "default": "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png"
            },
            "actions": [
              {
                "name": "hub:spotify:searchdeeplink",
                "type": "uri",
                "uri": "spotify:search:Fine%20Kyle%20Hume"
              }
            ],
            "type": "SPOTIFY"
          },
          {
            "caption": "Open in YouTube Music",
            "images": {
              "overflow": "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
              "default": "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png"
            },
            "actions": [
              {
                "name": "hub:youtubemusic:androiddeeplink",
                "type": "uri",
                "uri": "https://music.youtube.com/search?q=Fine+Kyle+Hume&feature=shazam"
              }
            ],
            "type": "YOUTUBEMUSIC"
          },
          {
            "caption": "Open in Deezer",
            "images": {
              "overflow": "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
              "default": "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png"
            },
            "actions": [
              {
                "name": "hub:deezer:searchdeeplink",
                "type": "uri",
                "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Fine%27%20artist%3A%27Kyle+Hume%27%7D"
              }
            ],
            "type": "DEEZER"
          }
        ],
        "explicit": false,
        "displayname": "APPLE MUSIC"
      },
      "artists": [
        {
          "id": "42",
          "adamid": "1313089285"
        }
      ],
      "url": "https://www.shazam.com/track/632320946/fine"
},{
  "layout": "5",
  "type": "MUSIC",
  "key": "559968948",
  "title": "Dominate",
  "subtitle": "Beartooth",
  "share": {
    "subject": "Dominate - Beartooth",
    "text": "I used Shazam to discover Dominate by Beartooth.",
    "href": "https://www.shazam.com/track/559968948/dominate",
    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e7/de/de/e7dedeba-77e1-d8eb-26e6-782b38483874/844942085721.jpg/400x400cc.jpg",
    "twitter": "I used @Shazam to discover Dominate by Beartooth.",
    "html": "https://www.shazam.com/snippets/email-share/559968948?lang=en-US&country=US",
    "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/f8/e7/12/f8e71277-7999-ba02-82f9-b801b759bbd4/pr_source.png/800x800cc.jpg",
    "snapchat": "https://www.shazam.com/partner/sc/track/559968948"
  },
  "images": {
    "background": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/f8/e7/12/f8e71277-7999-ba02-82f9-b801b759bbd4/pr_source.png/800x800cc.jpg",
    "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e7/de/de/e7dedeba-77e1-d8eb-26e6-782b38483874/844942085721.jpg/400x400cc.jpg",
    "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e7/de/de/e7dedeba-77e1-d8eb-26e6-782b38483874/844942085721.jpg/400x400cc.jpg",
    "joecolor": "b:050304p:f3a9e7s:f5a6dft:c388b9q:c586b3"
  },
  "hub": {
    "type": "APPLEMUSIC",
    "image": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic_{scalefactor}.png",
    "actions": [
      {
        "name": "apple",
        "type": "applemusicplay",
        "id": "1555808306"
      },
      {
        "name": "apple",
        "type": "uri",
        "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview114/v4/b4/3c/36/b43c3637-e1a6-1874-a6ae-070d26d5a86e/mzaf_10536864818898815553.plus.aac.ep.m4a"
      }
    ],
    "options": [
      {
        "caption": "OPEN",
        "actions": [
          {
            "name": "hub:applemusic:deeplink",
            "type": "applemusicopen",
            "uri": "https://music.apple.com/us/album/dominate/1555808295?i=1555808306&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
          },
          {
            "name": "hub:applemusic:deeplink",
            "type": "uri",
            "uri": "https://music.apple.com/us/album/dominate/1555808295?i=1555808306&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
          }
        ],
        "beacondata": {
          "type": "open",
          "providername": "applemusic"
        },
        "image": "https://images.shazam.com/static/icons/hub/ios/v5/overflow-open-option_{scalefactor}.png",
        "type": "open",
        "listcaption": "Open in Apple Music",
        "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic-overflow_{scalefactor}.png",
        "colouroverflowimage": false,
        "providername": "applemusic"
      },
      {
        "caption": "BUY",
        "actions": [
          {
            "type": "uri",
            "uri": "https://itunes.apple.com/us/album/dominate/1555808295?i=1555808306&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=itunes&itsct=Shazam_ios"
          }
        ],
        "beacondata": {
          "type": "buy",
          "providername": "itunes"
        },
        "image": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
        "type": "buy",
        "listcaption": "Buy on iTunes",
        "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
        "colouroverflowimage": false,
        "providername": "itunes"
      }
    ],
    "providers": [
      {
        "caption": "Open in Spotify",
        "images": {
          "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/spotify-overflow_{scalefactor}.png",
          "default": "https://images.shazam.com/static/icons/hub/ios/v5/spotify_{scalefactor}.png"
        },
        "actions": [
          {
            "name": "hub:spotify:searchdeeplink",
            "type": "uri",
            "uri": "spotify:search:Dominate%20Beartooth"
          }
        ],
        "type": "SPOTIFY"
      },
      {
        "caption": "Open in Deezer",
        "images": {
          "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/deezer-overflow_{scalefactor}.png",
          "default": "https://images.shazam.com/static/icons/hub/ios/v5/deezer_{scalefactor}.png"
        },
        "actions": [
          {
            "name": "hub:deezer:searchdeeplink",
            "type": "uri",
            "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Dominate%27%20artist%3A%27Beartooth%27%7D"
          }
        ],
        "type": "DEEZER"
      }
    ],
    "explicit": false,
    "displayname": "APPLE MUSIC"
  },
  "artists": [
    {
      "id": "42",
      "adamid": "590762561"
    }
  ],
  "url": "https://www.shazam.com/track/559968948/dominate"
    }],
    currentIndex:0,
    activeSong:{
          "layout": "5",
          "type": "MUSIC",
          "key": "322777165",
          "title": "Scars",
          "subtitle": "I Prevail",
          "share": {
            "subject": "Scars - I Prevail",
            "text": "I used Shazam to discover Scars by I Prevail.",
            "href": "https://www.shazam.com/track/322777165/scars",
            "image": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/32/3e/74/323e7488-51b7-dab0-12bf-2c7c0d0931b0/00888072012424.rgb.jpg/400x400cc.jpg",
            "twitter": "I used @Shazam to discover Scars by I Prevail.",
            "html": "https://www.shazam.com/snippets/email-share/322777165?lang=en&country=US",
            "avatar": "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/d3/21/54/d32154ab-0285-05fc-9072-abb9d172f444/pr_source.png/800x800cc.jpg",
            "snapchat": "https://www.shazam.com/partner/sc/track/322777165"
          },
          "images": {
            "background": "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/d3/21/54/d32154ab-0285-05fc-9072-abb9d172f444/pr_source.png/800x800cc.jpg",
            "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/32/3e/74/323e7488-51b7-dab0-12bf-2c7c0d0931b0/00888072012424.rgb.jpg/400x400cc.jpg",
            "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/32/3e/74/323e7488-51b7-dab0-12bf-2c7c0d0931b0/00888072012424.rgb.jpg/400x400cc.jpg",
            "joecolor": "b:000000p:ffffffs:fda932t:cbcbcbq:ca8728"
          },
          "hub": {
            "type": "APPLEMUSIC",
            "image": "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
            "actions": [
              {
                "name": "apple",
                "type": "applemusicplay",
                "id": "1440941609"
              },
              {
                "name": "apple",
                "type": "uri",
                "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/23/78/58/237858a4-f5b7-c1c5-5d59-0c2a0f967148/mzaf_14907750420876890762.plus.aac.ep.m4a"
              }
            ],
            "options": [
              {
                "caption": "OPEN",
                "actions": [
                  {
                    "name": "hub:applemusic:deeplink",
                    "type": "intent",
                    "uri": "intent://music.apple.com/us/album/scars/1440941604?i=1440941609&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end"
                  },
                  {
                    "name": "hub:applemusic:connect",
                    "type": "applemusicconnect",
                    "id": "1440941609",
                    "uri": "https://unsupported.shazam.com"
                  },
                  {
                    "name": "hub:applemusic:androidstore",
                    "type": "uri",
                    "uri": "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am"
                  }
                ],
                "beacondata": {
                  "type": "open",
                  "providername": "applemusic"
                },
                "image": "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
                "type": "open",
                "listcaption": "Open in Apple Music",
                "overflowimage": "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
                "colouroverflowimage": false,
                "providername": "applemusic"
              }
            ],
            "providers": [
              {
                "caption": "Open in Spotify",
                "images": {
                  "overflow": "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                  "default": "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png"
                },
                "actions": [
                  {
                    "name": "hub:spotify:searchdeeplink",
                    "type": "uri",
                    "uri": "spotify:search:Scars%20I%20Prevail"
                  }
                ],
                "type": "SPOTIFY"
              },
              {
                "caption": "Open in YouTube Music",
                "images": {
                  "overflow": "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                  "default": "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png"
                },
                "actions": [
                  {
                    "name": "hub:youtubemusic:androiddeeplink",
                    "type": "uri",
                    "uri": "https://music.youtube.com/search?q=Scars+I+Prevail&feature=shazam"
                  }
                ],
                "type": "YOUTUBEMUSIC"
              },
              {
                "caption": "Open in Deezer",
                "images": {
                  "overflow": "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                  "default": "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png"
                },
                "actions": [
                  {
                    "name": "hub:deezer:searchdeeplink",
                    "type": "uri",
                    "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Scars%27%20artist%3A%27I+Prevail%27%7D"
                  }
                ],
                "type": "DEEZER"
              }
            ],
            "explicit": false,
            "displayname": "APPLE MUSIC"
          },
          "artists": [
            {
              "id": "42",
              "adamid": "948448824"
            }
          ],
          "url": "https://www.shazam.com/track/322777165/scars"
    },
    isPlaying:false,
    playlistSongId:null,
    playlistData:null,
    recentPlay:[],
    tested:[
      {
        "layout": "5",
        "type": "MUSIC",
        "key": "322777165",
        "title": "Scars",
        "subtitle": "I Prevail",
        "share": {
          "subject": "Scars - I Prevail",
          "text": "I used Shazam to discover Scars by I Prevail.",
          "href": "https://www.shazam.com/track/322777165/scars",
          "image": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/32/3e/74/323e7488-51b7-dab0-12bf-2c7c0d0931b0/00888072012424.rgb.jpg/400x400cc.jpg",
          "twitter": "I used @Shazam to discover Scars by I Prevail.",
          "html": "https://www.shazam.com/snippets/email-share/322777165?lang=en&country=US",
          "avatar": "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/d3/21/54/d32154ab-0285-05fc-9072-abb9d172f444/pr_source.png/800x800cc.jpg",
          "snapchat": "https://www.shazam.com/partner/sc/track/322777165"
        },
        "images": {
          "background": "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/d3/21/54/d32154ab-0285-05fc-9072-abb9d172f444/pr_source.png/800x800cc.jpg",
          "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/32/3e/74/323e7488-51b7-dab0-12bf-2c7c0d0931b0/00888072012424.rgb.jpg/400x400cc.jpg",
          "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/32/3e/74/323e7488-51b7-dab0-12bf-2c7c0d0931b0/00888072012424.rgb.jpg/400x400cc.jpg",
          "joecolor": "b:000000p:ffffffs:fda932t:cbcbcbq:ca8728"
        },
        "hub": {
          "type": "APPLEMUSIC",
          "image": "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
          "actions": [
            {
              "name": "apple",
              "type": "applemusicplay",
              "id": "1440941609"
            },
            {
              "name": "apple",
              "type": "uri",
              "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/23/78/58/237858a4-f5b7-c1c5-5d59-0c2a0f967148/mzaf_14907750420876890762.plus.aac.ep.m4a"
            }
          ],
          "options": [
            {
              "caption": "OPEN",
              "actions": [
                {
                  "name": "hub:applemusic:deeplink",
                  "type": "intent",
                  "uri": "intent://music.apple.com/us/album/scars/1440941604?i=1440941609&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end"
                },
                {
                  "name": "hub:applemusic:connect",
                  "type": "applemusicconnect",
                  "id": "1440941609",
                  "uri": "https://unsupported.shazam.com"
                },
                {
                  "name": "hub:applemusic:androidstore",
                  "type": "uri",
                  "uri": "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am"
                }
              ],
              "beacondata": {
                "type": "open",
                "providername": "applemusic"
              },
              "image": "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
              "type": "open",
              "listcaption": "Open in Apple Music",
              "overflowimage": "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
              "colouroverflowimage": false,
              "providername": "applemusic"
            }
          ],
          "providers": [
            {
              "caption": "Open in Spotify",
              "images": {
                "overflow": "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
                "default": "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png"
              },
              "actions": [
                {
                  "name": "hub:spotify:searchdeeplink",
                  "type": "uri",
                  "uri": "spotify:search:Scars%20I%20Prevail"
                }
              ],
              "type": "SPOTIFY"
            },
            {
              "caption": "Open in YouTube Music",
              "images": {
                "overflow": "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
                "default": "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png"
              },
              "actions": [
                {
                  "name": "hub:youtubemusic:androiddeeplink",
                  "type": "uri",
                  "uri": "https://music.youtube.com/search?q=Scars+I+Prevail&feature=shazam"
                }
              ],
              "type": "YOUTUBEMUSIC"
            },
            {
              "caption": "Open in Deezer",
              "images": {
                "overflow": "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
                "default": "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png"
              },
              "actions": [
                {
                  "name": "hub:deezer:searchdeeplink",
                  "type": "uri",
                  "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Scars%27%20artist%3A%27I+Prevail%27%7D"
                }
              ],
              "type": "DEEZER"
            }
          ],
          "explicit": false,
          "displayname": "APPLE MUSIC"
        },
        "artists": [
          {
            "id": "42",
            "adamid": "948448824"
          }
        ],
        "url": "https://www.shazam.com/track/322777165/scars"
      },{
      "layout": "5",
      "type": "MUSIC",
      "key": "526476594",
      "title": "Nobody Else",
      "subtitle": "Cole Norton",
      "share": {
        "subject": "Nobody Else - Cole Norton",
        "text": "I used Shazam to discover Nobody Else by Cole Norton.",
        "href": "https://www.shazam.com/track/526476594/nobody-else",
        "image": "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/53/a9/d1/53a9d186-8e07-1fa0-c7af-d56354602280/ab69d7d2-3b78-4fd0-add6-7d4692124b31.jpg/400x400cc.jpg",
        "twitter": "I used @Shazam to discover Nobody Else by Cole Norton.",
        "html": "https://www.shazam.com/snippets/email-share/526476594?lang=en&country=US",
        "avatar": "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/e5/94/33/e59433f9-33c5-65f2-83e7-354637984593/pr_source.png/800x800cc.jpg",
        "snapchat": "https://www.shazam.com/partner/sc/track/526476594"
      },
      "images": {
        "background": "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/e5/94/33/e59433f9-33c5-65f2-83e7-354637984593/pr_source.png/800x800cc.jpg",
        "coverart": "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/53/a9/d1/53a9d186-8e07-1fa0-c7af-d56354602280/ab69d7d2-3b78-4fd0-add6-7d4692124b31.jpg/400x400cc.jpg",
        "coverarthq": "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/53/a9/d1/53a9d186-8e07-1fa0-c7af-d56354602280/ab69d7d2-3b78-4fd0-add6-7d4692124b31.jpg/400x400cc.jpg",
        "joecolor": "b:f0f8fap:15181ds:1e1d24t:404549q:48494e"
      },
      "hub": {
        "type": "APPLEMUSIC",
        "image": "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
        "actions": [
          {
            "name": "apple",
            "type": "applemusicplay",
            "id": "1596123939"
          },
          {
            "name": "apple",
            "type": "uri",
            "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/e3/27/b8/e327b813-167c-ec60-b02f-21dc8ec5c70f/mzaf_14084597681301988563.plus.aac.ep.m4a"
          }
        ],
        "options": [
          {
            "caption": "OPEN",
            "actions": [
              {
                "name": "hub:applemusic:deeplink",
                "type": "intent",
                "uri": "intent://music.apple.com/us/album/nobody-else/1596123936?i=1596123939&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end"
              },
              {
                "name": "hub:applemusic:connect",
                "type": "applemusicconnect",
                "id": "1596123939",
                "uri": "https://unsupported.shazam.com"
              },
              {
                "name": "hub:applemusic:androidstore",
                "type": "uri",
                "uri": "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am"
              }
            ],
            "beacondata": {
              "type": "open",
              "providername": "applemusic"
            },
            "image": "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
            "type": "open",
            "listcaption": "Open in Apple Music",
            "overflowimage": "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
            "colouroverflowimage": false,
            "providername": "applemusic"
          }
        ],
        "providers": [
          {
            "caption": "Open in Spotify",
            "images": {
              "overflow": "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
              "default": "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png"
            },
            "actions": [
              {
                "name": "hub:spotify:searchdeeplink",
                "type": "uri",
                "uri": "spotify:search:Nobody%20Else%20Cole%20Norton"
              }
            ],
            "type": "SPOTIFY"
          },
          {
            "caption": "Open in YouTube Music",
            "images": {
              "overflow": "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
              "default": "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png"
            },
            "actions": [
              {
                "name": "hub:youtubemusic:androiddeeplink",
                "type": "uri",
                "uri": "https://music.youtube.com/search?q=Nobody+Else+Cole+Norton&feature=shazam"
              }
            ],
            "type": "YOUTUBEMUSIC"
          },
          {
            "caption": "Open in Deezer",
            "images": {
              "overflow": "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
              "default": "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png"
            },
            "actions": [
              {
                "name": "hub:deezer:searchdeeplink",
                "type": "uri",
                "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Nobody+Else%27%20artist%3A%27Cole+Norton%27%7D"
              }
            ],
            "type": "DEEZER"
          }
        ],
        "explicit": true,
        "displayname": "APPLE MUSIC"
      },
      "artists": [
        {
          "id": "42",
          "adamid": "1328748437"
        }
      ],
      "url": "https://www.shazam.com/track/526476594/nobody-else"
}
,{
      "layout": "5",
      "type": "MUSIC",
      "key": "591268083",
      "title": "if you chase two rabbits",
      "subtitle": "OKAY! KENJI",
      "share": {
        "subject": "if you chase two rabbits - OKAY! KENJI",
        "text": "I used Shazam to discover if you chase two rabbits by OKAY! KENJI.",
        "href": "https://www.shazam.com/track/591268083/if-you-chase-two-rabbits",
        "image": "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/62/1e/fa/621efabe-6c92-42f7-c17c-d95f38beeb7a/5056495306948_1.jpg/400x400cc.jpg",
        "twitter": "I used @Shazam to discover if you chase two rabbits by OKAY! KENJI.",
        "html": "https://www.shazam.com/snippets/email-share/591268083?lang=en&country=US",
        "avatar": "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/f7/b1/dd/f7b1dd1f-60c4-bc88-a518-a1e9e0a48c27/pr_source.png/800x800cc.jpg",
        "snapchat": "https://www.shazam.com/partner/sc/track/591268083"
      },
      "images": {
        "background": "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/f7/b1/dd/f7b1dd1f-60c4-bc88-a518-a1e9e0a48c27/pr_source.png/800x800cc.jpg",
        "coverart": "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/62/1e/fa/621efabe-6c92-42f7-c17c-d95f38beeb7a/5056495306948_1.jpg/400x400cc.jpg",
        "coverarthq": "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/62/1e/fa/621efabe-6c92-42f7-c17c-d95f38beeb7a/5056495306948_1.jpg/400x400cc.jpg",
        "joecolor": "b:000000p:e8e8e8s:00edeet:b9b9b9q:00bdbe"
      },
      "hub": {
        "type": "APPLEMUSIC",
        "image": "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
        "actions": [
          {
            "name": "apple",
            "type": "applemusicplay",
            "id": "1608060707"
          },
          {
            "name": "apple",
            "type": "uri",
            "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/62/48/00/624800fa-5d2a-d5ca-2da9-069f90921833/mzaf_6902694186791312374.plus.aac.p.m4a"
          }
        ],
        "options": [
          {
            "caption": "OPEN",
            "actions": [
              {
                "name": "hub:applemusic:deeplink",
                "type": "intent",
                "uri": "intent://music.apple.com/us/album/if-you-chase-two-rabbits/1608060534?i=1608060707&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end"
              },
              {
                "name": "hub:applemusic:connect",
                "type": "applemusicconnect",
                "id": "1608060707",
                "uri": "https://unsupported.shazam.com"
              },
              {
                "name": "hub:applemusic:androidstore",
                "type": "uri",
                "uri": "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am"
              }
            ],
            "beacondata": {
              "type": "open",
              "providername": "applemusic"
            },
            "image": "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
            "type": "open",
            "listcaption": "Open in Apple Music",
            "overflowimage": "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
            "colouroverflowimage": false,
            "providername": "applemusic"
          }
        ],
        "providers": [
          {
            "caption": "Open in Spotify",
            "images": {
              "overflow": "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
              "default": "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png"
            },
            "actions": [
              {
                "name": "hub:spotify:searchdeeplink",
                "type": "uri",
                "uri": "spotify:search:if%20you%20chase%20two%20rabbits%20OKAY%21%20KENJI"
              }
            ],
            "type": "SPOTIFY"
          },
          {
            "caption": "Open in YouTube Music",
            "images": {
              "overflow": "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
              "default": "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png"
            },
            "actions": [
              {
                "name": "hub:youtubemusic:androiddeeplink",
                "type": "uri",
                "uri": "https://music.youtube.com/search?q=if+you+chase+two+rabbits+OKAY%21+KENJI&feature=shazam"
              }
            ],
            "type": "YOUTUBEMUSIC"
          },
          {
            "caption": "Open in Deezer",
            "images": {
              "overflow": "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
              "default": "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png"
            },
            "actions": [
              {
                "name": "hub:deezer:searchdeeplink",
                "type": "uri",
                "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27if+you+chase+two+rabbits%27%20artist%3A%27OKAY%21+KENJI%27%7D"
              }
            ],
            "type": "DEEZER"
          }
        ],
        "explicit": false,
        "displayname": "APPLE MUSIC"
      },
      "artists": [
        {
          "id": "42",
          "adamid": "1476414979"
        }
      ],
      "url": "https://www.shazam.com/track/591268083/if-you-chase-two-rabbits"
}
,{
      "layout": "5",
      "type": "MUSIC",
      "key": "632320946",
      "title": "Fine",
      "subtitle": "Kyle Hume",
      "share": {
        "subject": "Fine - Kyle Hume",
        "text": "I used Shazam to discover Fine by Kyle Hume.",
        "href": "https://www.shazam.com/track/632320946/fine",
        "image": "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/64/68/ff/6468ffdc-5f85-3ddc-39a5-930e096282ab/artwork.jpg/400x400cc.jpg",
        "twitter": "I used @Shazam to discover Fine by Kyle Hume.",
        "html": "https://www.shazam.com/snippets/email-share/632320946?lang=en&country=US",
        "avatar": "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/a0/86/5d/a0865d44-1ac4-6d3c-ef44-d1a36da07b4b/pr_source.png/800x800cc.jpg",
        "snapchat": "https://www.shazam.com/partner/sc/track/632320946"
      },
      "images": {
        "background": "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/a0/86/5d/a0865d44-1ac4-6d3c-ef44-d1a36da07b4b/pr_source.png/800x800cc.jpg",
        "coverart": "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/64/68/ff/6468ffdc-5f85-3ddc-39a5-930e096282ab/artwork.jpg/400x400cc.jpg",
        "coverarthq": "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/64/68/ff/6468ffdc-5f85-3ddc-39a5-930e096282ab/artwork.jpg/400x400cc.jpg",
        "joecolor": "b:fdaf17p:100909s:291c06t:3f2a0cq:533a09"
      },
      "hub": {
        "type": "APPLEMUSIC",
        "image": "https://images.shazam.com/static/icons/hub/android/v5/applemusic_{scalefactor}.png",
        "actions": [
          {
            "name": "apple",
            "type": "applemusicplay",
            "id": "1644629936"
          },
          {
            "name": "apple",
            "type": "uri",
            "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/db/c1/b9/dbc1b92f-3502-3c5b-4476-fa7932e7afdf/mzaf_3327073621106824267.plus.aac.ep.m4a"
          }
        ],
        "options": [
          {
            "caption": "OPEN",
            "actions": [
              {
                "name": "hub:applemusic:deeplink",
                "type": "intent",
                "uri": "intent://music.apple.com/us/album/fine/1644629935?i=1644629936&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_android_am&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_android_am#Intent;scheme=http;package=com.apple.android.music;action=android.intent.action.VIEW;end"
              },
              {
                "name": "hub:applemusic:connect",
                "type": "applemusicconnect",
                "id": "1644629936",
                "uri": "https://unsupported.shazam.com"
              },
              {
                "name": "hub:applemusic:androidstore",
                "type": "uri",
                "uri": "https://play.google.com/store/apps/details?id=com.apple.android.music&referrer=utm_source=https%3A%2F%2Fmusic.apple.com%2Fsubscribe%3Fmttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_android_am%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_android_am"
              }
            ],
            "beacondata": {
              "type": "open",
              "providername": "applemusic"
            },
            "image": "https://images.shazam.com/static/icons/hub/android/v5/overflow-open-option_{scalefactor}.png",
            "type": "open",
            "listcaption": "Open in Apple Music",
            "overflowimage": "https://images.shazam.com/static/icons/hub/android/v5/applemusic-overflow_{scalefactor}.png",
            "colouroverflowimage": false,
            "providername": "applemusic"
          }
        ],
        "providers": [
          {
            "caption": "Open in Spotify",
            "images": {
              "overflow": "https://images.shazam.com/static/icons/hub/android/v5/spotify-overflow_{scalefactor}.png",
              "default": "https://images.shazam.com/static/icons/hub/android/v5/spotify_{scalefactor}.png"
            },
            "actions": [
              {
                "name": "hub:spotify:searchdeeplink",
                "type": "uri",
                "uri": "spotify:search:Fine%20Kyle%20Hume"
              }
            ],
            "type": "SPOTIFY"
          },
          {
            "caption": "Open in YouTube Music",
            "images": {
              "overflow": "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic-overflow_{scalefactor}.png",
              "default": "https://images.shazam.com/static/icons/hub/android/v5/youtubemusic_{scalefactor}.png"
            },
            "actions": [
              {
                "name": "hub:youtubemusic:androiddeeplink",
                "type": "uri",
                "uri": "https://music.youtube.com/search?q=Fine+Kyle+Hume&feature=shazam"
              }
            ],
            "type": "YOUTUBEMUSIC"
          },
          {
            "caption": "Open in Deezer",
            "images": {
              "overflow": "https://images.shazam.com/static/icons/hub/android/v5/deezer-overflow_{scalefactor}.png",
              "default": "https://images.shazam.com/static/icons/hub/android/v5/deezer_{scalefactor}.png"
            },
            "actions": [
              {
                "name": "hub:deezer:searchdeeplink",
                "type": "uri",
                "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Fine%27%20artist%3A%27Kyle+Hume%27%7D"
              }
            ],
            "type": "DEEZER"
          }
        ],
        "explicit": false,
        "displayname": "APPLE MUSIC"
      },
      "artists": [
        {
          "id": "42",
          "adamid": "1313089285"
        }
      ],
      "url": "https://www.shazam.com/track/632320946/fine"
},{
  "layout": "5",
  "type": "MUSIC",
  "key": "559968948",
  "title": "Dominate",
  "subtitle": "Beartooth",
  "share": {
    "subject": "Dominate - Beartooth",
    "text": "I used Shazam to discover Dominate by Beartooth.",
    "href": "https://www.shazam.com/track/559968948/dominate",
    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e7/de/de/e7dedeba-77e1-d8eb-26e6-782b38483874/844942085721.jpg/400x400cc.jpg",
    "twitter": "I used @Shazam to discover Dominate by Beartooth.",
    "html": "https://www.shazam.com/snippets/email-share/559968948?lang=en-US&country=US",
    "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/f8/e7/12/f8e71277-7999-ba02-82f9-b801b759bbd4/pr_source.png/800x800cc.jpg",
    "snapchat": "https://www.shazam.com/partner/sc/track/559968948"
  },
  "images": {
    "background": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/f8/e7/12/f8e71277-7999-ba02-82f9-b801b759bbd4/pr_source.png/800x800cc.jpg",
    "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e7/de/de/e7dedeba-77e1-d8eb-26e6-782b38483874/844942085721.jpg/400x400cc.jpg",
    "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e7/de/de/e7dedeba-77e1-d8eb-26e6-782b38483874/844942085721.jpg/400x400cc.jpg",
    "joecolor": "b:050304p:f3a9e7s:f5a6dft:c388b9q:c586b3"
  },
  "hub": {
    "type": "APPLEMUSIC",
    "image": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic_{scalefactor}.png",
    "actions": [
      {
        "name": "apple",
        "type": "applemusicplay",
        "id": "1555808306"
      },
      {
        "name": "apple",
        "type": "uri",
        "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview114/v4/b4/3c/36/b43c3637-e1a6-1874-a6ae-070d26d5a86e/mzaf_10536864818898815553.plus.aac.ep.m4a"
      }
    ],
    "options": [
      {
        "caption": "OPEN",
        "actions": [
          {
            "name": "hub:applemusic:deeplink",
            "type": "applemusicopen",
            "uri": "https://music.apple.com/us/album/dominate/1555808295?i=1555808306&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
          },
          {
            "name": "hub:applemusic:deeplink",
            "type": "uri",
            "uri": "https://music.apple.com/us/album/dominate/1555808295?i=1555808306&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_ios"
          }
        ],
        "beacondata": {
          "type": "open",
          "providername": "applemusic"
        },
        "image": "https://images.shazam.com/static/icons/hub/ios/v5/overflow-open-option_{scalefactor}.png",
        "type": "open",
        "listcaption": "Open in Apple Music",
        "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/applemusic-overflow_{scalefactor}.png",
        "colouroverflowimage": false,
        "providername": "applemusic"
      },
      {
        "caption": "BUY",
        "actions": [
          {
            "type": "uri",
            "uri": "https://itunes.apple.com/us/album/dominate/1555808295?i=1555808306&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_ios&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=itunes&itsct=Shazam_ios"
          }
        ],
        "beacondata": {
          "type": "buy",
          "providername": "itunes"
        },
        "image": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
        "type": "buy",
        "listcaption": "Buy on iTunes",
        "overflowimage": "https://images.shazam.com/static/icons/hub/ios/v5/itunes-overflow-buy_{scalefactor}.png",
        "colouroverflowimage": false,
        "providername": "itunes"
      }
    ],
    "providers": [
      {
        "caption": "Open in Spotify",
        "images": {
          "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/spotify-overflow_{scalefactor}.png",
          "default": "https://images.shazam.com/static/icons/hub/ios/v5/spotify_{scalefactor}.png"
        },
        "actions": [
          {
            "name": "hub:spotify:searchdeeplink",
            "type": "uri",
            "uri": "spotify:search:Dominate%20Beartooth"
          }
        ],
        "type": "SPOTIFY"
      },
      {
        "caption": "Open in Deezer",
        "images": {
          "overflow": "https://images.shazam.com/static/icons/hub/ios/v5/deezer-overflow_{scalefactor}.png",
          "default": "https://images.shazam.com/static/icons/hub/ios/v5/deezer_{scalefactor}.png"
        },
        "actions": [
          {
            "name": "hub:deezer:searchdeeplink",
            "type": "uri",
            "uri": "deezer-query://www.deezer.com/play?query=%7Btrack%3A%27Dominate%27%20artist%3A%27Beartooth%27%7D"
          }
        ],
        "type": "DEEZER"
      }
    ],
    "explicit": false,
    "displayname": "APPLE MUSIC"
  },
  "artists": [
    {
      "id": "42",
      "adamid": "590762561"
    }
  ],
  "url": "https://www.shazam.com/track/559968948/dominate"
    }]
  }

const playerSlice = createSlice({
  name:"player",
  initialState,
  reducers:{
    setActiveSong:(state,action)=>{
      if(action.payload.data){
        state.songQueue = action.payload.data
        state.activeSong=action.payload.song
        state.currentIndex = action.payload.i;
      }else{
        state.songQueue = [action.payload.song];
        state.activeSong = action.payload.song;
        if(!state.recentPlay.some(a => a.key == action.payload.song.key)){
          state.recentPlay=[action.payload.song,...state.recentPlay].slice(0,5)
        }
        // if(state.recentPlay.length >= 5 ){
        //   state.recentPlay.pop()
        //   state.recentPlay.unshift(action.payload.song)
        // }else{
        //   state.recentPlay.unshift(action.payload.song)
        // }
      }
      
    },
    playPause: (state,action)=>{
      state.isPlaying=action.payload
    },
    nextSong:(state,action)=>{
      if(state.songQueue[action.payload]?.track){
        state.activeSong=state.songQueue[action.payload].track
      }else{
        state.activeSong=state.songQueue[action.payload]
      }
      state.currentIndex = action.payload;
    },
    prevSong:(state,action)=>{
      if(state.songQueue[action.payload]?.track){
        state.activeSong= state.songQueue[action.payload]?.track
      }else{
        state.activeSong=state.songQueue[action.payload]
      }
      state.currentIndex = action.payload;
    },
    addPlaylistSongId:(state,action)=>{
      console.log("addplaylist reducer run")
      const song=action.payload.arrSong
      const name=action.payload.playlistName
      const addOne=action.payload.addOne
        if(state.playlistSongId?.name){
          action.payload.arrSong !== undefined ? 
            state.playlistSongId.name = action.payload.arrSong
          :
            state.playlistSongId.name=null
        }else{
          action.payload.arrSong !== undefined ? 
            state.playlistSongId={...state.playlistSongId,[name]:song} 
          :
            state.playlistSongId={...state.playlistSongId,[name]:null}
        }
    },
    setPlaylistData:(state,action)=>{
      console.log("setplaylistdata reducer run")
      const songData=action.payload.songData
      const name=action.payload.playlistName
      if(state.playlistData == null){
        console.log("first if setplaylistdata")
        state.playlistData = [{name,song:[songData===undefined ? null : songData]}] 
      }else{
        if(state.playlistData.some((data) => data.name === name)){
          state.playlistData.filter(data=>{
            if(data.name == name){
              console.log("else first if setplaylistdata")
              data.song = [...data.song,songData]
            }
          })
        }else{
          state.playlistData = [...state.playlistData,{name,song:[songData]}]
        }
      }
    },
    addFromSearch:(state,action)=>{
      const song = action.payload.key;
      const name= action.payload.playlistName
      if(state.playlistSongId !== null){
        state.playlistSongId[name] = [...state.playlistSongId[name],song]
      }else{
        state.playlistSongId = {[name]:[song]}
      }
    },
    addPlaylistSong:(state,action)=>{
      console.log("add playlist runs")
      const name=action.payload.playlistName
      const songData=action.payload.song
      state.songQueue = [...state.songQueue,songData]
      state.playlistData?.filter(data => {
        if(data.name === name){
           data.song.length > 0 ? data.song=[...data.song,songData] : data.song=[songData]
        }
      })
    },
    removePlaylistSong:(state,action) => {
      console.log("remove playlist song run")
      const name=action.payload.playlistName
      const remove= ()=>{
        const val=state.playlistData.map(a=> {
          console.log(a.name === name)
          if(a.name === name){
            return a.song.filter(b=> {
              if(state.playlistSongId[name].includes(b?.key)){
                console.log(b,"bb")
                return b
              }
            })
          }
        })
        const [song]=val.filter(x=> x!== undefined)
        state.songQueue = song
        state.playlistData.filter(data=>{
          if(data.name === name){
            console.log("else first if remove song")
            data.song = song === undefined ? [] : song
          }
        })
      }
      remove()
    },
    setRecentPlaySong:(state)=>{
    },
    clearPlaylistData:(state)=>{
      state.playlistSongId=null
      state.playlistData=null
    }
  }
  
})

export const {setActiveSong,addFromSearch,playPause,nextSong,prevSong,addPlaylistSongId,setPlaylistData,removePlaylistSong,clearPlaylistData,addPlaylistSong} = playerSlice.actions
export default playerSlice.reducer
