import key1 from "../../assets/img/keys-img/pragling.jpg";
import key2 from "../../assets/img/keys-img/relationer.jpg";
import key3 from "../../assets/img/keys-img/tid.jpg";
import key4 from "../../assets/img/keys-img/body.jpg";
import key5 from "../../assets/img/keys-img/narvaro.jpg";
import key6 from "../../assets/img/keys-img/vision.jpg";
import { KeyValuePair } from "../../domain/model/KeyValuePair.model";

export const keys = [
    {
        key: 0,
        value: { active: true, image: key1, title: "Prägling", description: "Att förstå vem du är och varför du reagerar som du gör." },
    },
    {
        key: 1,
        value: { active: false, image: key2, title: "Relationer", description: "Relationer har vi med nära och kära, kollegor, tanten på ica mm Hur förhåller du dig till dem. Hur kan du hålla dig i trygghet och undvika osköna situationer." },
    },
    {
        key: 2,
        value: { active: false, image: key3, title: "Tid", description: "Hur lägger du din tid? Stressar du runt med känsla att inte hinna? Eller går tiden åt mobilen? Tänk att få använda ett sätt som du får koll på din tid, få mer tid till det du vill." },
    },
    {
        key: 3,
        value: { active: false, image: key4, title: "Kroppen", description: "Hur tar du hand om din kropp? Lyssnar du på vad den säger till dig. Vad gör du när kroppen har ont? Tröstar du den eller bestraffar, ger du belöningar?" },
    },
    {
        key: 4,
        value: { active: false, image: key5, title: "Närvaro", description: "Att lyssna inåt i stället för utåt. Höra sina egna tankar. Att hitta sin röst och känna trygghet i den." },
    },
    {
        key: 5,
        value: { active: false, image: key6, title: "Vision", description: "Vart är du på väg. Vad längtar du efter, hur kan du nå det." },
    },
] as KeyValuePair[];