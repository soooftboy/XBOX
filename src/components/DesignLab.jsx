import React from 'react';

export const DesignLab = () => {
  return (
      <section className="design-lab">
          <div className="container">
              <div className="design-lab__inner">
                  <h2 className="design-lab__title">Xbox Design Lab</h2>
                  <p className="design-lab__desc">Make yours one in a billion with new colors, metallic finishes and rubberized grips.</p>
                  <div className="design-lab__buttons">
                      <button className="design-lab__button design-lab__design-yours">Design Yours</button>
                      <button className="design-lab__button design-lab__explore">Explore Consoles & Accessories</button>
                  </div>
              </div>
          </div>
      </section>
  )
}