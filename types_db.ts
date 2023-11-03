export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Album: {
        Row: {
          artist_id: number | null
          id: number
          name: string | null
        }
        Insert: {
          artist_id?: number | null
          id?: number
          name?: string | null
        }
        Update: {
          artist_id?: number | null
          id?: number
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Album_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "Artist"
            referencedColumns: ["id"]
          }
        ]
      }
      Artist: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      Bookmark: {
        Row: {
          id: number
          song_id: number | null
          user_id: number | null
        }
        Insert: {
          id?: number
          song_id?: number | null
          user_id?: number | null
        }
        Update: {
          id?: number
          song_id?: number | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Bookmark_song_id_fkey"
            columns: ["song_id"]
            isOneToOne: false
            referencedRelation: "Song"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Bookmark_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      Membership: {
        Row: {
          end_date: string | null
          id: number
          start_date: string | null
          type: string | null
        }
        Insert: {
          end_date?: string | null
          id?: number
          start_date?: string | null
          type?: string | null
        }
        Update: {
          end_date?: string | null
          id?: number
          start_date?: string | null
          type?: string | null
        }
        Relationships: []
      }
      Playlist: {
        Row: {
          id: number
          name: string | null
          user_id: number | null
        }
        Insert: {
          id?: number
          name?: string | null
          user_id?: number | null
        }
        Update: {
          id?: number
          name?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Playlist_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      Song: {
        Row: {
          album_id: number | null
          artist_id: number | null
          genre: string | null
          id: number
          title: string | null
        }
        Insert: {
          album_id?: number | null
          artist_id?: number | null
          genre?: string | null
          id?: number
          title?: string | null
        }
        Update: {
          album_id?: number | null
          artist_id?: number | null
          genre?: string | null
          id?: number
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Song_album_id_fkey"
            columns: ["album_id"]
            isOneToOne: false
            referencedRelation: "Album"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Song_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "Artist"
            referencedColumns: ["id"]
          }
        ]
      }
      User: {
        Row: {
          email: string | null
          id: number
          membership_id: number | null
          name: string
          password: string | null
        }
        Insert: {
          email?: string | null
          id?: number
          membership_id?: number | null
          name?: string
          password?: string | null
        }
        Update: {
          email?: string | null
          id?: number
          membership_id?: number | null
          name?: string
          password?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      pricing_plan_interval: "day" | "week" | "month" | "year"
      pricing_type: "one_time" | "recurring"
      subscription_status:
        | "trialing"
        | "active"
        | "canceled"
        | "incomplete"
        | "incomplete_expired"
        | "past_due"
        | "unpaid"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
