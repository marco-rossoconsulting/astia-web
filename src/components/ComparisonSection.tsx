"use client";

import { motion, type Variants } from "framer-motion";
import { Check, Minus, X, Zap } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Status = "yes" | "partial" | "no";

type Cell = { status: Status; note?: string };

type Column = { name: string; detail: string; featured: boolean };

type Row = { feature: string; cells: [Cell, Cell, Cell] };

type Group = { title: string; rows: Row[] };

interface ComparisonSectionProps {
  headline?: string;
  subheadline?: string;
  columns?: Column[];
  groups?: Group[];
}

const defaultColumns: Column[] = [
  { name: "Astia Web", detail: "AI-managed, Astro-powered", featured: true },
  { name: "Web agency", detail: "Custom builds, retainers", featured: false },
  { name: "Wix / Squarespace", detail: "DIY website builders", featured: false },
];

const defaultGroups: Group[] = [
  {
    title: "Pricing",
    rows: [
      {
        feature: "Upfront cost",
        cells: [
          { status: "yes", note: "CHF 0" },
          { status: "no", note: "CHF 15k - 40k" },
          { status: "yes", note: "CHF 0" },
        ],
      },
      {
        feature: "Monthly cost",
        cells: [
          { status: "yes", note: "CHF 150 - 550" },
          { status: "no", note: "CHF 500 - 2,000" },
          { status: "partial", note: "CHF 30 - 50" },
        ],
      },
      {
        feature: "Annual total (year 1)",
        cells: [
          { status: "yes", note: "CHF 1,800 - 6,600" },
          { status: "no", note: "CHF 21k - 64k" },
          { status: "partial", note: "CHF 360 - 600" },
        ],
      },
    ],
  },
  {
    title: "Performance",
    rows: [
      {
        feature: "Load time under 1 second",
        cells: [
          { status: "yes", note: "Always" },
          { status: "partial", note: "Sometimes" },
          { status: "partial", note: "Rarely" },
        ],
      },
      {
        feature: "Lighthouse score",
        cells: [
          { status: "yes", note: "98-100" },
          { status: "partial", note: "60-85" },
          { status: "partial", note: "50-70" },
        ],
      },
      {
        feature: "Page weight",
        cells: [
          { status: "yes", note: "~80 KB" },
          { status: "partial", note: "~1.5 MB" },
          { status: "no", note: "~2.1 MB" },
        ],
      },
      {
        feature: "Time to deploy a change",
        cells: [
          { status: "yes", note: "< 2 minutes" },
          { status: "partial", note: "3 - 14 days" },
          { status: "partial", note: "Manual edits" },
        ],
      },
    ],
  },
  {
    title: "Features",
    rows: [
      {
        feature: "You own the code",
        cells: [
          { status: "yes", note: "Git repo + CMS" },
          { status: "partial", note: "Maybe" },
          { status: "no", note: "No" },
        ],
      },
      {
        feature: "AI-managed updates",
        cells: [
          { status: "yes", note: "Included" },
          { status: "no", note: "Extra cost" },
          { status: "no", note: "Manual only" },
        ],
      },
      {
        feature: "Direct booking integration",
        cells: [
          { status: "yes", note: "Built for it" },
          { status: "partial", note: "Custom build" },
          { status: "partial", note: "Limited add-ons" },
        ],
      },
      {
        feature: "Multi-language support",
        cells: [
          { status: "yes", note: "Included" },
          { status: "partial", note: "Extra cost" },
          { status: "partial", note: "Basic" },
        ],
      },
    ],
  },
];

const legend: { status: Status; label: string }[] = [
  { status: "yes", label: "Included" },
  { status: "partial", label: "Partial or add-on" },
  { status: "no", label: "Not available" },
];

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
};

function StatusChip({ status, featured }: { status: Status; featured?: boolean }) {
  if (status === "yes") {
    return (
      <span
        style={{
          display: "flex",
          height: "24px",
          width: "24px",
          flexShrink: 0,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "9999px",
          background: featured ? "var(--ink, #141414)" : "transparent",
          color: featured ? "var(--paper, #F7F5F0)" : "var(--rosso, #C41E3A)",
          border: featured ? "none" : "1px solid var(--bone, #E5E2DA)",
        }}
      >
        <Check size={14} strokeWidth={featured ? 2.5 : 2} />
      </span>
    );
  }
  if (status === "partial") {
    return (
      <span
        style={{
          display: "flex",
          height: "24px",
          width: "24px",
          flexShrink: 0,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "9999px",
          border: "1px dashed var(--bone, #E5E2DA)",
          color: "var(--stone, #6B6B66)",
        }}
      >
        <Minus size={14} />
      </span>
    );
  }
  return (
    <span
      style={{
        display: "flex",
        height: "24px",
        width: "24px",
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "9999px",
        background: "var(--bone-soft, #EDEAE2)",
        color: "var(--stone-soft, #9A9A93)",
      }}
    >
      <X size={14} />
    </span>
  );
}

function StatusCell({ cell, featured }: { cell: Cell; featured?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <StatusChip status={cell.status} featured={featured} />
      {cell.note ? (
        <span
          style={{
            fontSize: "14px",
            lineHeight: 1.4,
            fontWeight: featured ? 500 : 400,
            color: featured ? "var(--ink, #141414)" : "var(--stone, #6B6B66)",
            fontFamily: "'General Sans', -apple-system, sans-serif",
          }}
        >
          {cell.note}
        </span>
      ) : (
        <span className="sr-only">Not available</span>
      )}
    </div>
  );
}

export default function ComparisonSection({
  headline = "Astia versus the alternatives",
  subheadline = "The honest comparison. Numbers are industry averages pulled from public benchmarks, our own work, and twenty years of hospitality web pricing.",
  columns = defaultColumns,
  groups = defaultGroups,
}: ComparisonSectionProps) {
  return (
    <section
      style={{
        width: "100%",
        background: "var(--paper, #F7F5F0)",
        padding: "80px 16px",
      }}
      className="comparison-section"
    >
      <div
        style={{
          margin: "0 auto",
          width: "100%",
          maxWidth: "var(--container-max, 1240px)",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{
            marginBottom: "48px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
          className="comparison-header"
        >
          <div>
            <h2
              style={{
                fontFamily: "'Editorial New', Georgia, serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.018em",
                color: "var(--ink, #141414)",
                margin: 0,
              }}
            >
              {headline}
            </h2>
            <p
              style={{
                marginTop: "16px",
                maxWidth: "640px",
                fontSize: "clamp(17px, 1.4vw, 20px)",
                lineHeight: 1.55,
                color: "var(--ink-soft, #2A2A2A)",
                fontFamily: "'General Sans', -apple-system, sans-serif",
              }}
            >
              {subheadline}
            </p>
          </div>
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "20px 28px",
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {legend.map((item) => (
              <li key={item.status} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <StatusChip status={item.status} />
                <span
                  style={{
                    fontSize: "13px",
                    color: "var(--stone, #6B6B66)",
                    fontFamily: "'General Sans', -apple-system, sans-serif",
                  }}
                >
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "0",
            border: "1px solid var(--bone, #E5E2DA)",
            background: "var(--paper, #F7F5F0)",
            boxShadow: "0 1px 2px rgba(20,20,20,0.05), 0 12px 32px rgba(20,20,20,0.06)",
          }}
        >
          <div style={{ overflowX: "auto" }}>
            <div style={{ minWidth: "720px" }}>
              {/* Header row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(190px, 1.5fr) minmax(180px, 1.1fr) minmax(170px, 1fr) minmax(170px, 1fr)",
                  borderBottom: "1px solid var(--bone, #E5E2DA)",
                }}
              >
                <div
                  style={{
                    position: "sticky",
                    left: 0,
                    zIndex: 10,
                    display: "flex",
                    alignItems: "flex-end",
                    background: "var(--paper, #F7F5F0)",
                    padding: "20px 24px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.16em",
                      color: "var(--stone, #6B6B66)",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    Capability
                  </span>
                </div>
                {columns.map((column) => (
                  <div
                    key={column.name}
                    style={{
                      padding: "20px 20px",
                      background: column.featured
                        ? "rgba(196, 30, 58, 0.04)"
                        : "transparent",
                      borderLeft: column.featured
                        ? "1px solid var(--bone, #E5E2DA)"
                        : "none",
                      borderRight: column.featured
                        ? "1px solid var(--bone, #E5E2DA)"
                        : "none",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      {column.featured && (
                        <span
                          style={{
                            display: "flex",
                            height: "24px",
                            width: "24px",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "4px",
                            background: "var(--rosso, #C41E3A)",
                            color: "var(--paper, #F7F5F0)",
                          }}
                        >
                          <Zap size={14} />
                        </span>
                      )}
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: column.featured
                            ? "var(--ink, #141414)"
                            : "var(--stone, #6B6B66)",
                          fontFamily: "'General Sans', -apple-system, sans-serif",
                        }}
                      >
                        {column.name}
                      </span>
                    </div>
                    <p
                      style={{
                        marginTop: "4px",
                        fontSize: "12px",
                        color: "var(--stone-soft, #9A9A93)",
                        fontFamily: "'General Sans', -apple-system, sans-serif",
                      }}
                    >
                      {column.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Groups */}
              {groups.map((group, groupIndex) => (
                <motion.div
                  key={group.title}
                  variants={listVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                >
                  {/* Group header */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "minmax(190px, 1.5fr) minmax(180px, 1.1fr) minmax(170px, 1fr) minmax(170px, 1fr)",
                      borderBottom: "1px solid var(--bone, #E5E2DA)",
                    }}
                  >
                    <div
                      style={{
                        position: "sticky",
                        left: 0,
                        zIndex: 10,
                        background: "var(--cream, #FAFAF7)",
                        padding: "16px 24px",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "11px",
                          fontWeight: 500,
                          textTransform: "uppercase",
                          letterSpacing: "0.16em",
                          color: "var(--stone, #6B6B66)",
                          fontFamily: "'JetBrains Mono', monospace",
                          margin: 0,
                        }}
                      >
                        {group.title}
                      </h3>
                    </div>
                    <div
                      style={{
                        borderLeft: "1px solid var(--bone, #E5E2DA)",
                        borderRight: "1px solid var(--bone, #E5E2DA)",
                        background: "rgba(196, 30, 58, 0.04)",
                      }}
                    />
                    <div />
                    <div />
                  </div>

                  {/* Rows */}
                  {group.rows.map((row, rowIndex) => (
                    <motion.div
                      key={row.feature}
                      variants={rowVariants}
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "minmax(190px, 1.5fr) minmax(180px, 1.1fr) minmax(170px, 1fr) minmax(170px, 1fr)",
                        borderBottom:
                          groupIndex === groups.length - 1 &&
                          rowIndex === group.rows.length - 1
                            ? "none"
                            : "1px solid var(--bone, #E5E2DA)",
                      }}
                    >
                      <div
                        style={{
                          position: "sticky",
                          left: 0,
                          zIndex: 10,
                          display: "flex",
                          alignItems: "center",
                          background: "var(--paper, #F7F5F0)",
                          padding: "14px 24px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "var(--ink, #141414)",
                            fontFamily: "'General Sans', -apple-system, sans-serif",
                          }}
                        >
                          {row.feature}
                        </span>
                      </div>
                      {row.cells.map((cell, cellIndex) => (
                        <div
                          key={cellIndex}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "14px 20px",
                            background: columns[cellIndex].featured
                              ? "rgba(196, 30, 58, 0.04)"
                              : "transparent",
                            borderLeft: columns[cellIndex].featured
                              ? "1px solid var(--bone, #E5E2DA)"
                              : "none",
                            borderRight: columns[cellIndex].featured
                              ? "1px solid var(--bone, #E5E2DA)"
                              : "none",
                          }}
                        >
                          <StatusCell
                            cell={cell}
                            featured={columns[cellIndex].featured}
                          />
                        </div>
                      ))}
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile fade */}
          <div
            style={{
              position: "absolute",
              inset: "0 0 0 auto",
              width: "40px",
              background: "linear-gradient(to left, var(--paper, #F7F5F0), transparent)",
              pointerEvents: "none",
              display: "none",
            }}
            className="comparison-mobile-fade"
          />
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{
            marginTop: "20px",
            fontSize: "12px",
            lineHeight: 1.5,
            color: "var(--stone-soft, #9A9A93)",
            fontFamily: "'General Sans', -apple-system, sans-serif",
          }}
        >
          Assessment based on vendor documentation and public pricing, 2026.{" "}
          <span className="comparison-mobile-hint" style={{ display: "none" }}>
            Swipe sideways to see every column.
          </span>
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .comparison-section {
            padding: 56px 16px !important;
          }
          .comparison-mobile-fade {
            display: block !important;
          }
          .comparison-mobile-hint {
            display: inline !important;
          }
        }
      `}</style>
    </section>
  );
}
