import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm Gengchao Yang, a Software Engineer specializing in Test Automation, Backend, and Cloud-Native systems. I possess strong full-stack capabilities with Python and React, focusing on building scalable, real-time architectures. My engineering philosophy centers on quality through Test-Driven Development (TDD) and robust CI/CD pipelines, aiming to shorten the feedback loop from development to deployment.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
