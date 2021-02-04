$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Frankfurt.feature");
formatter.feature({
  "name": "Frankfurt Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I send a GET request to Frankfurt endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "FrankfurtSteps.iSendAGETRequestToFrankfurtEndpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "FrankfurtSteps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Checking available stations",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "following hubs should be available",
  "rows": [
    {
      "cells": [
        "Hauptwache",
        "Fressgasse / Neue Mainzer Str.",
        "Friedberger Platz / Café Harveys"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FrankfurtSteps.followingHubsShouldBeAvailable(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Checking stations info",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "following \"\u003cstations\u003e\" should have following \"\u003cid\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "stations",
        "id"
      ]
    },
    {
      "cells": [
        "Hauptwache",
        "fb84608abfd17c82a4e00d406fa6193f"
      ]
    },
    {
      "cells": [
        "Fressgasse / Neue Mainzer Str.",
        "93d295d2c1da4aa73398c30e60917df6"
      ]
    },
    {
      "cells": [
        "Friedberger Platz / Café Harveys",
        "5313c629cc501e6b70f039f2c82593e9"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I send a GET request to Frankfurt endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "FrankfurtSteps.iSendAGETRequestToFrankfurtEndpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "FrankfurtSteps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Checking stations info",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "following \"Hauptwache\" should have following \"fb84608abfd17c82a4e00d406fa6193f\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FrankfurtSteps.followingShouldHaveFollowing(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I send a GET request to Frankfurt endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "FrankfurtSteps.iSendAGETRequestToFrankfurtEndpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "FrankfurtSteps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Checking stations info",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "following \"Fressgasse / Neue Mainzer Str.\" should have following \"93d295d2c1da4aa73398c30e60917df6\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FrankfurtSteps.followingShouldHaveFollowing(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I send a GET request to Frankfurt endpoint",
  "keyword": "When "
});
formatter.match({
  "location": "FrankfurtSteps.iSendAGETRequestToFrankfurtEndpoint()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "FrankfurtSteps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Checking stations info",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "following \"Friedberger Platz / Café Harveys\" should have following \"5313c629cc501e6b70f039f2c82593e9\"",
  "keyword": "Then "
});
formatter.match({
  "location": "FrankfurtSteps.followingShouldHaveFollowing(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Networks.feature");
formatter.feature({
  "name": "Verify Frankfurt Info",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "I send a GET request to networks",
  "keyword": "When "
});
formatter.match({
  "location": "NetworksSteps.iSendAGETRequestToNetworks()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "NetworksSteps.statusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Frankfurt should be in Germany",
  "keyword": "Then "
});
formatter.match({
  "location": "NetworksSteps.frankfurtShouldBeInGermany()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be  able get location info",
  "keyword": "And "
});
formatter.match({
  "location": "NetworksSteps.iShouldBeAbleGetLocationInfo()"
});
formatter.result({
  "status": "passed"
});
});