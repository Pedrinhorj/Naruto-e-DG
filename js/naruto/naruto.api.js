import { BASE_URL_NARUTO } from "../apiConfig";

export class NarutoApi {

    async getCharacterByName(name) {
        try {
            const response = await fetch(`${BASE_URL_NARUTO}/character/search?name=${name}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao buscar o personagem:', error);
            return null;
        }
    }

    async getClanByName(name) {
        try {
            const response = await fetch(`${BASE_URL_NARUTO}/clan/search?name=${name}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao buscar o clã:', error);
            return null;
        }
    }

    async getKaraByName(name) {
        try {
            const response = await fetch(`${BASE_URL_NARUTO}/kara/search?name=${name}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao buscar o Kara:', error);
            return null;
        }
    }

    async getKekkeiGenkaiByName(name) {
        try {
            const response = await fetch(`${BASE_URL_NARUTO}/kekkei-genkai/search?name=${name}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao buscar o Kekkei Genkai:', error);
            return null;
        }
    }

    async getTailedBeastByName(name) {
        try {
            const response = await fetch(`${BASE_URL_NARUTO}/tailed-beast/search?name=${name}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao buscar a besta com cauda:', error);
            return null;
        }
    }

    async getTeamByName(name) {
        try {
            const response = await fetch(`${BASE_URL_NARUTO}/team/search?name=${name}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao buscar o time:', error);
            return null;
        }
    }

    async getVillageByName(name) {
        try {
            const response = await fetch(`${BASE_URL_NARUTO}/village/search?name=${name}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao buscar a vila:', error);
            return null;
        }
    }

    async getAkatsukiMemberByName(name) {
        try {
            const response = await fetch(`${BASE_URL_NARUTO}/akatsuki/search?name=${name}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao buscar o membro da Akatsuki:', error);
            return null;
        }
    }
}
