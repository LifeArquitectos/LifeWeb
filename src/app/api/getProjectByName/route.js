import { connectDB } from '@/libs/mongodb';
import { NextResponse } from 'next/server';
import Project from '@/models/project';
import mongoose from 'mongoose';

export async function POST(request) {
  try {
    await connectDB();
    const { titulo } = await request.json();
    const project = await Project.findOne({ titulo });
    if (!project) {
      return NextResponse.json(
        { message: 'No project found' },
        { status: 409 }
      );
    } else {
      return NextResponse.json(project, { status: 201 });
    }
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 400,
        }
      );
    }
    return NextResponse.error();
  }
}
