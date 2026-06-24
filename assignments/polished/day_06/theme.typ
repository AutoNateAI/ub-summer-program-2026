#let navy = rgb("#16364a")
#let teal = rgb("#277c86")
#let gold = rgb("#d99a2b")
#let ink = rgb("#1d252c")
#let muted = rgb("#64717d")
#let paper = rgb("#fbfaf7")
#let soft-blue = rgb("#eaf4f5")
#let soft-gold = rgb("#fff4dc")
#let rule-color = rgb("#c9d7dc")
#let brand-primary = "GVSU TRIO Upward Bound"
#let brand-partner = "AutoNateAI"
#let brand-lockup = brand-primary + "  |  " + brand-partner

#let setup(title: "", subtitle: "", kind: "", body) = {
  set document(title: title, author: brand-lockup)
  set page(
    paper: "us-letter",
    margin: (x: 0.7in, y: 0.68in),
    fill: paper,
    numbering: "1",
    header: context {
      if counter(page).get().first() > 1 {
        text(size: 8.3pt, fill: muted)[#brand-lockup #h(1fr) #kind]
      }
    },
    footer: context {
      if counter(page).get().first() > 1 {
        align(center)[#text(size: 8.5pt, fill: muted)[#title · Page #counter(page).display()]]
      }
    },
  )
  set text(font: "New Computer Modern", size: 10.2pt, fill: ink)
  set par(justify: true, leading: 0.55em)
  set list(indent: 1.1em, body-indent: 0.35em)
  set enum(indent: 1.1em, body-indent: 0.35em)
  show heading.where(level: 1): it => block(
    above: 18pt,
    below: 7pt,
  )[
    #text(size: 18pt, weight: "bold", fill: navy)[#it.body]
    #line(length: 100%, stroke: 1.4pt + gold)
  ]
  show heading.where(level: 2): it => block(
    above: 14pt,
    below: 5pt,
  )[
    #text(size: 13.5pt, weight: "bold", fill: teal)[#it.body]
  ]
  show heading.where(level: 3): it => block(
    above: 10pt,
    below: 4pt,
  )[
    #text(size: 11.2pt, weight: "bold", fill: navy)[#it.body]
  ]
  show table.cell.where(y: 0): strong
  body
}

#let title-card(title, subtitle: "", label: "Day 1") = {
  block(
    width: 100%,
    fill: navy,
    radius: 7pt,
    inset: (x: 22pt, y: 24pt),
    below: 18pt,
  )[
    #grid(
      columns: (1fr, auto),
      align: (left, right),
    )[
      #text(size: 9pt, weight: "bold", fill: gold)[#label]
    ][
      #text(size: 9pt, weight: "bold", fill: rgb("#dbe9ee"))[#brand-lockup]
    ]
    #v(8pt)
    #text(size: 28pt, weight: "bold", fill: white)[#title]
    #if subtitle != "" {
      v(6pt)
      text(size: 13pt, fill: rgb("#dbe9ee"))[#subtitle]
    }
  ]
}

#let callout(title, body, fill: soft-gold, stroke: gold) = {
  block(
    width: 100%,
    breakable: false,
    fill: fill,
    stroke: 0.8pt + stroke,
    radius: 6pt,
    inset: 11pt,
    above: 7pt,
    below: 9pt,
  )[
    #text(weight: "bold", fill: navy)[#title]
    #v(3pt)
    #body
  ]
}

#let quote-card(body) = {
  block(
    width: 100%,
    breakable: false,
    fill: soft-blue,
    stroke: (left: 3pt + teal),
    inset: (x: 12pt, y: 10pt),
    radius: 4pt,
    above: 7pt,
    below: 9pt,
  )[
    #text(size: 13pt, weight: "bold", fill: navy)[#body]
  ]
}

#let flow-node(item) = block(
  width: 100%,
  fill: soft-blue,
  stroke: 0.7pt + rule-color,
  radius: 5pt,
  inset: (x: 8pt, y: 6pt),
)[#align(center)[#text(size: 9.3pt, weight: "medium")[#item]]]

#let flow-row(items) = {
  if items.len() == 1 {
    align(center)[#block(width: 48%)[#flow-node(items.first())]]
  } else if items.len() == 2 {
    grid(
      columns: (1fr, 18pt, 1fr),
      gutter: 4pt,
      align: horizon,
      flow-node(items.at(0)),
      align(center)[#text(fill: gold, weight: "bold")[->]],
      flow-node(items.at(1)),
    )
  } else {
    grid(
      columns: (1fr, 18pt, 1fr, 18pt, 1fr),
      gutter: 4pt,
      align: horizon,
      flow-node(items.at(0)),
      align(center)[#text(fill: gold, weight: "bold")[->]],
      flow-node(items.at(1)),
      align(center)[#text(fill: gold, weight: "bold")[->]],
      flow-node(items.at(2)),
    )
  }
}

#let compact-flow(title, rows) = {
  block(width: 100%, breakable: false, above: 8pt, below: 10pt)[
    #text(weight: "bold", fill: navy)[#title]
    #v(6pt)
    #for (i, row) in rows.enumerate() {
      flow-row(row)
      if i < rows.len() - 1 {
        align(center)[#text(size: 13pt, fill: gold, weight: "bold")[↓]]
      }
    }
  ]
}

#let split-map(title, branches) = {
  block(width: 100%, breakable: false, above: 8pt, below: 10pt)[
    #text(weight: "bold", fill: navy)[#title]
    #v(6pt)
    #grid(
      columns: (1fr, 1fr),
      gutter: 8pt,
      ..branches.map(branch => block(
        fill: white,
        stroke: 0.7pt + rule-color,
        radius: 5pt,
        inset: 9pt,
      )[
        #text(weight: "bold", fill: teal)[#branch.at(0)]
        #v(3pt)
        #list(..branch.at(1).map(x => [#x]))
      ])
    )
  ]
}

#let pro-table(columns, body) = {
  block(width: 100%, breakable: false)[
    #table(
      columns: columns,
      inset: 6pt,
      stroke: (_, y) => if y == 0 { 0pt } else { 0.45pt + rule-color },
      fill: (_, y) => if y == 0 { navy } else if calc.rem(y, 2) == 0 { rgb("#f3f7f7") } else { white },
      align: horizon,
      ..body,
    )
  ]
}

#let field(label, height: 28pt) = {
  block(width: 100%, below: 9pt)[
    #text(weight: "bold", fill: navy)[#label]
    #v(3pt)
    #block(width: 100%, height: height, fill: white, stroke: 0.7pt + rule-color, radius: 4pt)[]
  ]
}

#let checklist(items) = {
  block(width: 100%, breakable: false)[
    #grid(
      columns: (1fr, 1fr),
      gutter: 7pt,
      ..items.map(item => block(
        fill: white,
        stroke: 0.7pt + rule-color,
        radius: 4pt,
        inset: 7pt,
      )[
        #text(fill: teal, weight: "bold")[□] #item
      ])
    )
  ]
}

#let prompt(title, body) = {
  block(
    width: 100%,
    breakable: false,
    fill: rgb("#f2f0eb"),
    stroke: 0.7pt + rgb("#d7d0c3"),
    radius: 6pt,
    inset: 10pt,
    above: 8pt,
    below: 11pt,
  )[
    #text(weight: "bold", fill: navy)[#title]
    #v(4pt)
    #text(size: 9.5pt)[#body]
  ]
}
