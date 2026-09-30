import {
    addDoc,
    collection,
    serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/config";

export const saveProposalResponse = async (response) => {
    try {
        await addDoc(collection(db, "proposalResponses"), {
            response,
            timestamp: serverTimestamp(),
        });

        console.log(`Proposal response saved: ${response}`);
    } catch (error) {
        console.error("Failed to save proposal response:", error);
    }
};

export const saveUserReply = async (message) => {
    try {
        await addDoc(collection(db, "userReplies"), {
            message,
            timestamp: serverTimestamp(),
        });
        return true;
    } catch (error) {
        console.error("Failed to save reply:", error);
        return false;
    }
};