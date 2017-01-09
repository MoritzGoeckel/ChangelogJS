var exampleData = [
    {
        "product":"Example Project",
        "version":"1.0.4",
        "type":"Bugfix",
        "title":"Wenn der Spieler in einer Lore sitzt und in einen zwei Blöcke Raum gelangt, erhält man keinen Schaden mehr",
        "media":'<iframe width="560" height="315" src="https://www.youtube.com/embed/Sxhn07tGqys?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'
    },{
        "product":"Example Project",
        "version":"1.0.4",
        "type":"Bugfix",
        "title":"Das Zerstören einer Lore, während der Spieler in ihr sitzt lässt das Spiel nicht mehr abstürzen",
        "media":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    },
    {
        "product":"Example Project",
        "version":"1.0.4",
        "type":"Bugfix",
        "title":"Ein Fehler im Kreatur-Spawncode behoben",
        "media":'<object data="test.pdf" type="application/pdf" style="width:100%;height:300px"><a href="test.pdf">PDF laden</a></object>'
    },
    {
        "product":"Example Project",
        "version":"1.0.4",
        "type":"Task",
        "title":"Schnee schwebt über Stufen",
        "media":'<iframe width="560" height="315" src="https://www.youtube.com/embed/hHRuBF2ouE8?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'
    },
    {
        "product":"Example Project",
        "version":"1.0.4",
        "type":"Task",
        "title":"Das Platzieren eines Blocks auf dem Schnee setzt diesen nun über den Schnee, sodass er in der Luft schwebt",
        "media":"Changes from <a href='http://minecraft-de.gamepedia.com/Versionsgeschichte/Classic#Creative_Singleplayer'>Minecraft</a>"
    },
    {
        "product":"Example Project",
        "version":"1.0.4",
        "type":"Task",
        "title":"Wenn man auf Schnee läuft ertönt das Geräusch des Blocks, der sich unter dem Schnee befindet",
        "media":'<iframe width="560" height="315" src="https://www.youtube.com/embed/hHRuBF2ouE8?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'
    },{
        "product":"Example Project",
        "version":"1.0.4",
        "type":"Cleanup",
        "title":"Schneeablagerungen",
        "media":'<object data="test.pdf" type="application/pdf" style="width:100%;height:300px"><a href="test.pdf">PDF laden</a></object>'
    },{
        "product":"Example Project",
        "version":"1.0.4",
        "type":"Cleanup",
        "title":"roter Staub heißt Redstone",
        "media":'<iframe width="560" height="315" src="https://www.youtube.com/embed/gmWIhDv6OtY?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'
    },{
        "product":"Example Project",
        "version":"1.0.4",
        "type":"Feature",
        "title":"Sitzanimation, um Dinge zu reiten",
        "media":""
    },
    {
        "product":"Example Project",
        "version":"1.0.4",
        "type":"Feature",
        "title":"Winterkarten mit dünnem Schnee und Eis hinzugefügt",
        "media":"Changes from <a href='http://minecraft-de.gamepedia.com/Versionsgeschichte/Classic#Creative_Singleplayer'>Minecraft</a>"
    },
    {
        "product":"Example Project",
        "version":"1.0.3",
        "type":"Feature",
        "title":"Höhlenumgebungsgeräusche",
        "media":""
    },
    {
        "product":"Example Project",
        "version":"1.0.3",
        "type":"Task",
        "title":"Geräusche für Kreaturen",
        "media":""
    },
    {
        "product":"Example Project",
        "version":"1.0.3",
        "type":"Cleanup",
        "title":"Allgemein realistischeres Verhalten der Kreaturen",
        "media":"Hallo Welt!"
    },
    {
        "product":"Example Project",
        "version":"1.0.3",
        "type":"Cleanup",
        "title":"Der Wegealgorithmus funktioniert jetzt auch bei Hügeln (außer für Spinnen)",
        "media":'<iframe width="560" height="315" src="https://www.youtube.com/embed/gmWIhDv6OtY?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'
    },
    {
        "product":"Example Project",
        "version":"1.0.2.1",
        "type":"Feature",
        "title":"Redstone Staub gibt nun Partikel ab",
        "media":"Changes from <a href='http://minecraft-de.gamepedia.com/Versionsgeschichte/Classic#Creative_Singleplayer'>Minecraft</a>"
    },
    {
        "product":"Example Project",
        "version":"1.0.2.1",
        "type":"Feature",
        "title":"Auf Redstone Staub zu laufen zerstört diesen nicht mehr",
        "media":'<object data="test.pdf" type="application/pdf" style="width:100%;height:300px"><a href="test.pdf">PDF laden</a></object>'
    },
    {
        "product":"Example Project",
        "version":"1.0.2.1",
        "type":"Feature",
        "title":"Redstone Staub verbindet sich nicht diagonal nach unten durch solide Blöcke",
        "media":'<iframe width="560" height="315" src="https://www.youtube.com/embed/hHRuBF2ouE8?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'
    },
    {
        "product":"Example Project",
        "version":"1.0.2.1",
        "type":"Feature",
        "title":"Redstone Fackeln senden nur durch Stufen ihr Signal",
        "media":""
    },
    {
        "product":"Example Project",
        "version":"1.0.1.1",
        "type":"Bugfix",
        "title":"Linux-Maus-Fehler behoben",
        "media":""
    },
    {
        "product":"Example Project",
        "version":"1.0.1",
        "type":"Bugfix",
        "title":"Schilder bleiben auch, wenn sie bereits entfernt sind (durch Neuladen des Speicherstandes kann dies behoben werden)",
        "media":'<object data="test.pdf" type="application/pdf" style="width:100%;height:300px"><a href="test.pdf">PDF laden</a></object>'
    },
    {
        "product":"Example Project",
        "version":"1.1",
        "type":"Cleanup",
        "title":"Neues Türen-Icon",
        "media":""
    },
    {
        "product":"Example Project",
        "version":"1.0.1",
        "type":"Cleanup",
        "title":"Schilder können an Wänden platziert werden",
        "media":'<iframe width="560" height="315" src="https://www.youtube.com/embed/hHRuBF2ouE8?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'
    },
    {
        "product":"Example Project",
        "version":"1.0.1",
        "type":"Cleanup",
        "title":"Schilder können an Wänden platziert werden",
        "media":"Changes from <a href='http://minecraft-de.gamepedia.com/Versionsgeschichte/Classic#Creative_Singleplayer'>Minecraft</a>"
    },
    {
        "product":"Example Project",
        "version":"1.0.1",
        "type":"Task",
        "title":"Kohle kann in kleineren und größeren Flözen gefunden werden",
        "media":""
    },
    {
        "product":"Example Project",
        "version":"1.0.1",
        "type":"Task",
        "title":"Höhlen können deutlich größer und ausgedehnter sein",
        "media":""
    },
    {
        "product":"Example Project",
        "version":"1.0.1",
        "type":"Feature",
        "title":"Schafe regenerieren Wolle",
        "media":""
    },
    {
        "product":"Example Project",
        "version":"1.0.1",
        "type":"Feature",
        "title":"KI verbessert",
        "media":'<object data="test.pdf" type="application/pdf" style="width:100%;height:300px"><a href="test.pdf">PDF laden</a></object>'
    },
    {
        "product":"Example Project",
        "version":"1.0.0.1",
        "type":"Task",
        "title":"Wenn ein Spieler unterhalb der Welt ist, stirbt er",
        "media":'<iframe width="560" height="315" src="https://www.youtube.com/embed/hHRuBF2ouE8?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'
    },
    {
        "product":"Example Project",
        "version":"1.0.0.1",
        "type":"Feature",
        "title":"Offizielle Veröffentlichung des Offline-Clients",
        "media":'<iframe width="560" height="315" src="https://www.youtube.com/embed/hHRuBF2ouE8?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>'
    },
    {
        "product":"Example Project",
        "version":"1.0.0",
        "type":"Task",
        "title":"Lava dort zu platzieren, wo bereits Lava vorhanden ist, hat keinen Effekt",
        "media":""
    },
    {
        "product":"Example Project",
        "version":"1.0.0",
        "type":"Bugfix",
        "title":"Klassischer-Boosterschienen-Fehler behoben",
        "media":""
    },
    {
        "product":"Example Project",
        "version":"1.0.0",
        "type":"Feature",
        "title":"Treppen hinzugefügt",
        "media":'<object data="test.pdf" type="application/pdf" style="width:100%;height:300px"><a href="test.pdf">PDF laden</a></object>'
    },
    {
        "product":"Example Project",
        "version":"1.0.0",
        "type":"Feature",
        "title":"Das Spiel wird mit dem herunterladbaren Clienten veröffentlicht",
        "media":"Changes from <a href='http://minecraft-de.gamepedia.com/Versionsgeschichte/Classic#Creative_Singleplayer'>Minecraft</a>"
    }
];