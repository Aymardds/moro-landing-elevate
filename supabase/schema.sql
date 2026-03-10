-- Supabase SQL Schema for Moro Landing Blog
-- Run this in the Supabase SQL Editor at: https://supabase.com/dashboard/project/cqyewwijdkrxezjxxdgq/sql

-- Enable uuid extension
create extension if not exists "uuid-ossp";

-- Blog Posts Table
create table if not exists public.blog_posts (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text not null unique,
  content text not null default '',
  excerpt text not null default '',
  image text not null default '',
  published boolean not null default false,
  category text not null default 'Actualité',
  seo_title text not null default '',
  seo_description text not null default '',
  seo_keywords text not null default '',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.blog_posts enable row level security;

-- Allow anyone to read published posts
create policy "Anyone can read published posts"
  on public.blog_posts
  for select
  using (published = true);

-- Allow authenticated users to do everything
create policy "Authenticated users can manage all posts"
  on public.blog_posts
  for all
  to authenticated
  using (true)
  with check (true);

-- Updated_at trigger
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language 'plpgsql';

create or replace trigger update_blog_posts_updated_at
  before update on public.blog_posts
  for each row execute procedure update_updated_at_column();
