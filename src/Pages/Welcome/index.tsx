import DownArrowIcon from 'Assets/welcome/downarrow.png'
import { ROUTE_HOME } from 'Router/path'
import lax from 'lax.js'

import './index.css'
import { useEffect } from 'react'
import { IconLogo } from 'Icons'

const Welcome = () => {
  useEffect(() => {
    window.scrollTo(0, 0)

    lax.init()

    lax.addDriver(
      'scrollY',
      function () {
        return document.documentElement.scrollTop
      },
      { frameStep: 1 }
    )

    lax.addElements(
      '.letter-x',
      {
        scrollY: {
          translateY: [
            [-400, 0, 100],
            [300, 0, 100]
          ],
          scale: [
            [100, 'screenHeight'],
            [0.25, 10]
          ],
          opacity: [
            [0, 100, 'screenHeight/2', 'screenHeight'],
            [0.5, 1, 1, 0]
          ]
        }
      },
      {
        onUpdate: (driverValues: { scrollY: number[] }, domElement: HTMLElement) => {
          const scrollY = driverValues.scrollY[0]

          if (scrollY >= 100) {
            domElement.classList.add('text-primary')
          } else {
            domElement.classList.remove('text-primary')
          }
        }
      }
    )

    lax.addElements('.letter-l', {
      scrollY: {
        translateY: [
          [-400, 0],
          [100, 0]
        ],
        translateX: [
          [0, 100, 'screenHeight'],
          [0, 100, 400]
        ],
        opacity: [
          [0, 100, 'screenHeight/2'],
          [0.5, 1, 0]
        ]
      }
    })

    lax.addElements('.letter-a', {
      scrollY: {
        translateY: [
          [-400, 0],
          [200, 0]
        ],
        translateX: [
          [0, 100, 'screenHeight'],
          [0, -100, -400]
        ],
        opacity: [
          [0, 100, 'screenHeight/2'],
          [0.5, 1, 0]
        ]
      }
    })

    lax.addElements('.scroll-down', {
      scrollY: {
        'letter-spacing': [
          [0, 'screenHeight'],
          [0, 150],
          {
            cssUnit: 'px'
          }
        ],
        opacity: [
          ['screenHeight*0.25', 'screenHeight*0.75'],
          [1, 0]
        ],
        translateX: [
          [0, 'screenHeight'],
          [0, 80]
        ]
      }
    })

    lax.addElements('.oooh', {
      scrollY: {
        translateX: [
          ['elInY', 'elOutY'],
          [0, 'screenWidth-200']
        ]
      }
    })

    lax.addElements('.aaah', {
      scrollY: {
        translateX: [
          ['elInY', 'elOutY'],
          [0, '-screenWidth-200']
        ]
      }
    })

    lax.addElements('.wheee', {
      scrollY: {
        translateX: [
          ['elInY', 'elOutY'],
          [-400, 'screenWidth+100']
        ],
        skewX: [
          ['elInY', 'elOutY'],
          [40, -40]
        ]
      }
    })

    lax.addElements('.bubble', {
      scrollY: {
        translateY: [
          ['screenHeight/4', 'screenHeight * 3'],
          ['Math.random()*screenHeight', 'Math.random()*screenHeight*3']
        ],
        opacity: [
          ['screenHeight/4', 'screenHeight/2'],
          [0, 1]
        ],
        scale: [[0], ['(Math.random()*0.8)+0.2']],
        translateX: [[0], ['index*(screenWidth/25)-50']],
        transform: [
          [0, 4000],
          [0, '(Math.random() + 0.8) * 1000'],
          {
            cssFn: function (val: number) {
              return `rotateX(${val % 360}deg)`
            }
          }
        ],
        rotate: [
          [0, 4000],
          [0, '(Math.random() - 0.5) * 1000']
        ]
      }
    })

    lax.addElements('#pinkZag', {
      scrollY: {
        translateY: [
          ['elInY', 'elOutY'],
          [0, -300]
        ]
      }
    })

    lax.addElements('#tealZag', {
      scrollY: {
        translateY: [
          ['elInY', 'elOutY'],
          [0, 200]
        ]
      }
    })

    lax.addElements('#purpleZag', {
      scrollY: {
        translateY: [
          ['elInY', 'elOutY'],
          [0, 700]
        ]
      }
    })

    lax.addElements('.down-arrows img', {
      scrollY: {
        translateY: [
          [0, 200],
          [0, 200]
        ],
        opacity: [
          [0, 'screenHeight'],
          [1, 0]
        ]
      }
    })

    lax.addElements('.bottom-button', {
      scrollY: {
        'background-position': [
          ['elInY', 'elOutY'],
          [0, 400],
          {
            cssFn: function (val: number) {
              return `${val}px 0`
            }
          }
        ],
        scale: [
          ['elInY', 'elCenterY'],
          [3, 1]
        ]
      }
    })
  }, [])

  return (
    <div className="welcome-container">
      <div className="letter-l">Fun</div>
      <div className="letter-a">Tour</div>
      <div className="letter-x text-white">
        <IconLogo className="inline-block h-full w-full" />
      </div>

      <h2 className="scroll-down">scroll down</h2>

      <div className="down-arrows">
        <img src={DownArrowIcon} />
      </div>

      <div className="zags">
        <div id="pinkZag" className="zag"></div>
        <div id="tealZag" className="zag"></div>
        <div id="purpleZag" className="zag"></div>
      </div>

      <div className="bubbles">
        <div className="bubble blue"></div>
        <div className="bubble red"></div>
        <div className="bubble yellow"></div>
        <div className="bubble red"></div>
        <div className="bubble blue"></div>
        <div className="bubble yellow"></div>
        <div className="bubble blue"></div>
        <div className="bubble red"></div>
        <div className="bubble yellow"></div>
        <div className="bubble red"></div>
        <div className="bubble blue"></div>
        <div className="bubble blue"></div>
        <div className="bubble red"></div>
        <div className="bubble yellow"></div>
        <div className="bubble red"></div>
        <div className="bubble blue"></div>
        <div className="bubble yellow"></div>
        <div className="bubble blue"></div>
        <div className="bubble red"></div>
        <div className="bubble yellow"></div>
        <div className="bubble red"></div>
        <div className="bubble blue"></div>
        <div className="bubble yellow"></div>
        <div className="bubble blue"></div>
        <div className="bubble red"></div>
      </div>

      <h1 className="oooh">oooh</h1>
      <h1 className="aaah">aaah</h1>

      <h1 className="wheee">wheee!</h1>

      <div className="bottom-bg"></div>

      <a href={ROUTE_HOME}>
        <div className="bottom-button">Get FunTour</div>
      </a>
    </div>
  )
}

export default Welcome
