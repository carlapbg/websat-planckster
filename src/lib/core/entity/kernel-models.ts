import { id } from "inversify";
import { z } from "zod";

export const ResearchContextSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
});
export type TResearchContext = z.infer<typeof ResearchContextSchema>;

export const ConversationSchema = z.object({
  id: z.number(),
  title: z.string(),
  created_at: z.string().optional(),
});
export type TConversation = z.infer<typeof ConversationSchema>;

export const MessageContentSchema = z.object({
  id: z.number().optional(),
  content: z.string(),
  content_type: z.union([z.literal("image"), z.literal("text"), z.literal("citation")]),
});
export type TMessageContent = z.infer<typeof MessageContentSchema>;

export const MessageSchema = z.object({
  id: z.number().optional(),
  message_contents: z.array(MessageContentSchema),
  sender: z.string(),
  sender_type: z.union([z.literal("user"), z.literal("agent")]),
  created_at: z.string().optional(),
  thread_id: z.number().optional(),  // TODO: threads (for replies) to be implemented
});

export type TMessage = z.infer<typeof MessageSchema>;
