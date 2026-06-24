#let blue = rgb("#126a9f")
#let cyan = rgb("#1aa7c8")
#let green = rgb("#4f7b31")
#let ink = rgb("#1c2328")
#let muted = rgb("#68737d")
#let paper = rgb("#fbfaf5")
#let panel = rgb("#ffffff")
#let line-color = rgb("#d8ddd6")
#let soft-blue = rgb("#eaf6fb")
#let soft-green = rgb("#edf6df")
#let soft-gold = rgb("#fff6df")
#let dark = rgb("#15202a")
#let brand = "AutoNateAI"

#let setup(title: "", subtitle: "", kind: "Student Tutorial", body) = {
  set document(title: title, author: brand)
  set page(
    paper: "us-letter",
    margin: (x: 0.62in, y: 0.6in),
    fill: paper,
    numbering: "1",
    header: context {
      if counter(page).get().first() > 1 {
        text(size: 8.2pt, fill: muted)[#brand #h(1fr) #kind]
      }
    },
    footer: context {
      if counter(page).get().first() > 1 {
        align(center)[#text(size: 8.2pt, fill: muted)[#title · Page #counter(page).display()]]
      }
    },
  )
  set text(font: "New Computer Modern", size: 10.4pt, fill: ink)
  set par(justify: true, leading: 0.57em)
  set list(indent: 1.05em, body-indent: 0.36em)
  set enum(indent: 1.05em, body-indent: 0.36em)
  show heading.where(level: 1): it => block(above: 16pt, below: 8pt)[
    #text(size: 18pt, weight: "bold", fill: dark)[#it.body]
    #line(length: 100%, stroke: 1.2pt + cyan)
  ]
  show heading.where(level: 2): it => block(above: 13pt, below: 5pt)[
    #text(size: 13.2pt, weight: "bold", fill: blue)[#it.body]
  ]
  show heading.where(level: 3): it => block(above: 10pt, below: 4pt)[
    #text(size: 11pt, weight: "bold", fill: green)[#it.body]
  ]
  show raw: set text(font: "DejaVu Sans Mono", size: 8.4pt)
  body
}

#let title-card(title, subtitle: "", label: "UBO Robotics Lab") = {
  block(
    width: 100%,
    fill: dark,
    radius: 7pt,
    inset: (x: 22pt, y: 22pt),
    below: 16pt,
  )[
    #grid(columns: (1fr, auto), align: (left, right))[
      #text(size: 8.8pt, weight: "bold", fill: cyan)[#label]
    ][
      #text(size: 8.8pt, weight: "bold", fill: rgb("#dcebf0"))[#brand]
    ]
    #v(8pt)
    #text(size: 28pt, weight: "bold", fill: white)[#title]
    #if subtitle != "" {
      v(6pt)
      text(size: 12.6pt, fill: rgb("#dcebf0"))[#subtitle]
    }
  ]
}

#let callout(title, body, fill: soft-gold, stroke: rgb("#e3b84d")) = {
  block(
    width: 100%,
    breakable: false,
    fill: fill,
    stroke: 0.75pt + stroke,
    radius: 6pt,
    inset: 10pt,
    above: 7pt,
    below: 9pt,
  )[
    #text(weight: "bold", fill: dark)[#title]
    #v(3pt)
    #body
  ]
}

#let concept(title, body) = callout(title, body, fill: soft-blue, stroke: cyan)

#let checkpoint(items) = {
  block(width: 100%, breakable: false, fill: soft-green, stroke: 0.7pt + green, radius: 6pt, inset: 9pt, above: 6pt, below: 9pt)[
    #text(weight: "bold", fill: green)[Checkpoint]
    #v(3pt)
    #list(..items.map(item => [#item]))
  ]
}

#let screenshot(path, caption) = {
  figure(
    block(width: 100%, fill: panel, stroke: 0.65pt + line-color, radius: 6pt, inset: 5pt)[
      #image(path, width: 100%)
    ],
    caption: [#caption],
  )
}

#let pro-table(columns, body) = {
  block(width: 100%, breakable: false, below: 8pt)[
    #table(
      columns: columns,
      inset: 5.5pt,
      stroke: (_, y) => if y == 0 { 0pt } else { 0.45pt + line-color },
      fill: (_, y) => if y == 0 { dark } else if calc.rem(y, 2) == 0 { rgb("#f4f8f8") } else { white },
      align: horizon,
      ..body,
    )
  ]
}

#let flow-row(items) = {
  grid(
    columns: (1fr, 16pt, 1fr, 16pt, 1fr),
    gutter: 3pt,
    align: horizon,
    block(fill: soft-blue, stroke: 0.7pt + line-color, radius: 5pt, inset: 7pt)[#align(center)[#items.at(0)]],
    align(center)[#text(fill: blue, weight: "bold")[->]],
    block(fill: soft-blue, stroke: 0.7pt + line-color, radius: 5pt, inset: 7pt)[#align(center)[#items.at(1)]],
    align(center)[#text(fill: blue, weight: "bold")[->]],
    block(fill: soft-blue, stroke: 0.7pt + line-color, radius: 5pt, inset: 7pt)[#align(center)[#items.at(2)]],
  )
}
