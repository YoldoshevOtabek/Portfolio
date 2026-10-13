type Props = {
    kind: "shop" | "education";
  };
  
  export default function ProjectPreview({ kind }: Props) {
    const isShop = kind === "shop";
  
    return (
      <div
        className={`project-preview ${kind}`}
        aria-label={`${kind} application preview`}
      >
        <div className="mock-sidebar">
          <div className="mock-brand">
            <span className="mock-brand-icon">◈</span>
            <i />
          </div>
  
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className={`mock-nav ${index === 0 ? "active" : ""} ${
                index === 4 ? "short" : ""
              }`}
            />
          ))}
        </div>
  
        <div className="mock-content">
          <div className="mock-top">
            <div>
              <span className="mock-eyebrow">
                WORKSPACE / OVERVIEW
              </span>
              <b>{isShop ? "Dashboard" : "Learning center"}</b>
            </div>
            <span className="mock-avatar">OY</span>
          </div>
  
          <div className="mock-stats">
            {[
              {
                label: isShop ? "Total orders" : "Students",
                value: isShop ? "1,248" : "892",
              },
              {
                label: isShop ? "Customers" : "Groups",
                value: isShop ? "892" : "36",
              },
              {
                label: isShop ? "Products" : "Teachers",
                value: isShop ? "240" : "28",
              },
            ].map((stat) => (
              <div key={stat.label}>
                <i />
                <small>{stat.label}</small>
                <b>{stat.value}</b>
                <em>↗ Active</em>
              </div>
            ))}
          </div>
  
          <div className="mock-chart">
            <div className="mock-chart-head">
              <b>{isShop ? "Sales overview" : "Student activity"}</b>
              <span>Last 7 days⌄</span>
            </div>
  
            <div className="chart-bars">
              {[38, 58, 45, 76, 52, 88, 67, 94, 60, 78, 48, 86, 71, 98, 64, 79, 53, 90, 69, 82].map(
                (height, index) => (
                  <i
                    key={index}
                    style={{ height: `${height}%` }}
                  />
                )
              )}
            </div>
          </div>
  
          <div className="mock-table">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} />
            ))}
          </div>
        </div>
  
        <div className="preview-glow" />
      </div>
    );
  }