import key1 from "../../assets/img/keys-img/key1.jpeg";
import key2 from "../../assets/img/keys-img/key2.jpeg";
import key3 from "../../assets/img/keys-img/key3.jpeg";
import key4 from "../../assets/img/keys-img/key4.jpeg";
import key5 from "../../assets/img/keys-img/key5.jpeg";
import { KeyValuePair } from "../../domain/model/KeyValuePair.model";

export const keys = [
    {
        key: 0,
        value: { active: true, image: key1, title: "Prägling", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    },
    {
        key: 1,
        value: { active: false, image: key2, title: "Relationer", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    },
    {
        key: 2,
        value: { active: false, image: key3, title: "Tid", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    },
    {
        key: 3,
        value: { active: false, image: key4, title: "Kroppen", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    },
    {
        key: 4,
        value: { active: false, image: key5, title: "Närvaro", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    },
    {
        key: 5,
        value: { active: false, image: "key6", title: "Vision", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    },
] as KeyValuePair[];